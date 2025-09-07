import fs from "node:fs";
import path from "node:path";

const isWooEnabled = () => {
  return Boolean(process.env.WOOCOMMERCE_URL && process.env.WOOCOMMERCE_CONSUMER_KEY && process.env.WOOCOMMERCE_CONSUMER_SECRET);
};

export async function getLocalProducts() {
  const dataPath = path.join(process.cwd(), "data", "products.json");
  const raw = fs.readFileSync(dataPath, "utf8");
  const products = JSON.parse(raw);
  return products;
}

export async function getWooProducts() {
  const baseUrl = process.env.WOOCOMMERCE_URL;
  const key = process.env.WOOCOMMERCE_CONSUMER_KEY;
  const secret = process.env.WOOCOMMERCE_CONSUMER_SECRET;
  const url = new URL("/wp-json/wc/v3/products", baseUrl);
  url.searchParams.set("per_page", "50");

  const auth = Buffer.from(`${key}:${secret}`).toString("base64");
  const res = await fetch(url, {
    headers: {
      Authorization: `Basic ${auth}`,
      Accept: "application/json"
    },
    // In case of self-signed certs in local WP
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error(`WooCommerce fetch failed: ${res.status}`);
  const items = await res.json();
  // Normalize to local shape
  const normalized = items.map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    description: stripHtml(p.short_description || p.description || ""),
    price: Number(p.price || p.regular_price || 0),
    currency: "USD",
    age: extractAgeFromCategories(p.categories || []),
    image: (p.images && p.images[0] && p.images[0].src) || ""
  }));
  return normalized;
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "").trim();
}

function extractAgeFromCategories(categories) {
  for (const c of categories) {
    const name = (c.name || "").toLowerCase();
    if (name.includes("1")) return 1;
    if (name.includes("2")) return 2;
    if (name.includes("3")) return 3;
  }
  return 1;
}

export async function getProducts() {
  if (isWooEnabled()) {
    try {
      return await getWooProducts();
    } catch (e) {
      // Fallback to local on error
      return await getLocalProducts();
    }
  }
  return await getLocalProducts();
}

export async function getProductBySlug(slug) {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) || null;
}

export async function getProductsByAge(age) {
  const products = await getProducts();
  const a = Number(age);
  return products.filter((p) => Number(p.age) === a);
}

import ProductCard from "../components/ProductCard";

async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products`, {
    cache: "no-store"
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data.products || [];
}

export default async function ProductGrid() {
  const products = await fetchProducts();
  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">Featured</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}


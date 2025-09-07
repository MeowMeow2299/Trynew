import ProductGrid from "./sections/ProductGrid";

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="text-center bg-white rounded-lg p-6 border border-black/10">
        <h1 className="text-2xl font-semibold">Baby Girl Boutique</h1>
        <p className="text-gray-600 mt-1">Adorable outfits for ages 1–3</p>
      </section>
      <ProductGrid />
    </div>
  );
}

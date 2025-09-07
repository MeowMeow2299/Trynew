import { getProductsByAge } from "../../../lib/products";
import ProductCard from "../../components/ProductCard";

export default async function AgePage({ params }) {
  const { age } = await params;
  const products = await getProductsByAge(age);
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Age {age}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}


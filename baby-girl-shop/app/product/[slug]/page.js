import Image from "next/image";
import { getProductBySlug } from "../../../lib/products";
import AddToCartButton from "../../components/AddToCartButton";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return <div>Not found</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden border border-black/10">
        {product.image ? (
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        ) : null}
      </div>
      <div className="bg-white rounded-lg p-4 border border-black/10">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4 flex items-center gap-4">
          <span className="text-xl font-semibold">${Number(product.price).toFixed(2)}</span>
          <AddToCartButton product={product} />
        </div>
        <p className="text-sm text-gray-500 mt-3">Age: {product.age}</p>
      </div>
    </div>
  );
}


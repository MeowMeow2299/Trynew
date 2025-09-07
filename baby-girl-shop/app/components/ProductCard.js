"use client";

import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }) {
  return (
    <div className="border border-black/10 rounded-lg overflow-hidden bg-white flex flex-col">
      <div className="relative w-full h-48">
        {product.image ? (
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-100" />
        )}
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <Link href={`/product/${product.slug}`} className="font-medium hover:underline">
          {product.name}
        </Link>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-semibold">${Number(product.price).toFixed(2)}</span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}


"use client";

import { useState } from "react";
import { useCart } from "../providers/CartProvider";

export default function AddToCartButton({ product }) {
  const { addItem } = useCart();
  const [adding, setAdding] = useState(false);

  return (
    <button
      className="rounded-md bg-pink-600 text-white px-3 py-2 text-sm hover:bg-pink-700 disabled:opacity-50"
      onClick={() => {
        setAdding(true);
        addItem(product, 1);
        setTimeout(() => setAdding(false), 300);
      }}
      disabled={adding}
    >
      {adding ? "Added" : "Add to cart"}
    </button>
  );
}


"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../providers/CartProvider";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <div className="bg-white p-6 border rounded-lg">
          <p>Your cart is empty.</p>
          <Link href="/" className="text-pink-700 hover:underline mt-2 inline-block">Continue shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-3">
            {items.map((item) => (
              <div key={item.slug} className="bg-white border rounded-lg p-3 flex gap-3 items-center">
                <div className="relative w-20 h-20 bg-gray-100 rounded overflow-hidden">
                  {item.image ? (
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  ) : null}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-600">Age {item.age}</div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    className="w-16 border rounded px-2 py-1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.slug, Number(e.target.value))}
                  />
                  <button className="text-sm text-red-600" onClick={() => removeItem(item.slug)}>Remove</button>
                </div>
                <div className="w-20 text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="bg-white border rounded-lg p-4 h-fit">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <Link href="/checkout" className="mt-4 block text-center bg-pink-600 text-white rounded-md py-2 hover:bg-pink-700">Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}


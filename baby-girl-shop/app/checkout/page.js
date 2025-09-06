"use client";

import { useState } from "react";
import { useCart } from "../providers/CartProvider";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, customer: { name, email } })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      clearCart();
      router.push(`/order/${data.orderId}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return <div className="bg-white p-6 border rounded-lg">Your cart is empty.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <form className="bg-white border rounded-lg p-4 md:col-span-2" onSubmit={onSubmit}>
        <h1 className="text-xl font-semibold mb-4">Checkout</h1>
        <div className="space-y-3">
          <div>
            <label className="block text-sm">Full name</label>
            <input className="w-full border rounded px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
        </div>
        {error && <p className="text-sm text-red-600 mt-3">{error}</p>}
        <button disabled={loading} className="mt-4 bg-pink-600 text-white rounded-md px-4 py-2 hover:bg-pink-700 disabled:opacity-50">
          {loading ? "Processing..." : "Place order"}
        </button>
      </form>
      <div className="bg-white border rounded-lg p-4 h-fit">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}


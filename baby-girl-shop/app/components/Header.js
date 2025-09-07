"use client";

import Link from "next/link";
import { useCart } from "../providers/CartProvider";

export default function Header() {
  const { totalItems } = useCart();
  return (
    <header className="w-full border-b border-black/10 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Baby Girl Boutique
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/age/1" className="hover:underline">
            Age 1
          </Link>
          <Link href="/age/2" className="hover:underline">
            Age 2
          </Link>
          <Link href="/age/3" className="hover:underline">
            Age 3
          </Link>
          <Link href="/cart" className="relative">
            Cart
            <span className="ml-1 inline-flex items-center justify-center rounded-full bg-pink-600 text-white text-[11px] px-2 py-[2px]">
              {totalItems}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}


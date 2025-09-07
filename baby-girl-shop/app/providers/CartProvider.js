"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

function readCartFromStorage() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem("cart_items_v1");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeCartToStorage(items) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem("cart_items_v1", JSON.stringify(items));
  } catch {}
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const initial = readCartFromStorage();
    setItems(initial);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) writeCartToStorage(items);
  }, [items, hydrated]);

  const addItem = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.slug === product.slug);
      if (existing) {
        return prev.map((p) =>
          p.slug === product.slug ? { ...p, quantity: p.quantity + quantity } : p
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: Number(product.price || 0),
          image: product.image || "",
          age: Number(product.age || 1),
          quantity
        }
      ];
    });
  };

  const removeItem = (slug) => {
    setItems((prev) => prev.filter((p) => p.slug !== slug));
  };

  const updateQuantity = (slug, quantity) => {
    setItems((prev) => prev.map((p) => (p.slug === slug ? { ...p, quantity } : p)));
  };

  const clearCart = () => setItems([]);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, addItem, removeItem, updateQuantity, clearCart, subtotal, totalItems, hydrated }),
    [items, subtotal, totalItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}


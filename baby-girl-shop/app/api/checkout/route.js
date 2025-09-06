import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    const { items, customer } = payload || {};
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }
    // Stripe or WP checkout integration would go here.
    const orderId = `ord_${Math.random().toString(36).slice(2, 10)}`;
    return NextResponse.json({ ok: true, orderId });
  } catch (e) {
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}

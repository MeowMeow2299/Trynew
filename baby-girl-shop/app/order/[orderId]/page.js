export default async function OrderThankYou({ params }) {
  const { orderId } = await params;
  return (
    <div className="bg-white border rounded-lg p-6">
      <h1 className="text-xl font-semibold">Thank you!</h1>
      <p className="mt-2">Your order <span className="font-mono">{orderId}</span> has been placed.</p>
      <p className="mt-2">We sent a confirmation email if provided.</p>
    </div>
  );
}


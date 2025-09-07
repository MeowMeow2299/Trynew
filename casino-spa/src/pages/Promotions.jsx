export default function Promotions() {
  const promos = [
    { title: 'Welcome Bonus', detail: '100% up to $200' },
    { title: 'Free Spins Friday', detail: '50 spins on select slots' },
    { title: 'Cashback Monday', detail: '10% cashback on losses' },
  ]
  return (
    <section>
      <h1>Promotions</h1>
      <ul className="promo-list">
        {promos.map((p) => (
          <li key={p.title} className="promo-item">
            <strong>{p.title}:</strong> {p.detail}
          </li>
        ))}
      </ul>
    </section>
  )
}
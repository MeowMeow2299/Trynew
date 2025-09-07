export default function Slots() {
  return (
    <section>
      <h1>Slots</h1>
      <p>Spin the reels and chase jackpots.</p>
      <div className="grid">
        {['Lucky 7', 'Gold Rush', 'Star Spin', 'Fruit Blast', 'Mega Win', 'Ocean Treasures'].map((name) => (
          <div key={name} className="slot-tile">{name}</div>
        ))}
      </div>
    </section>
  )
}
import Hero from '../components/Hero'

export default function Home() {
  const slots = ['Lucky 7', 'Gold Rush', 'Star Spin', 'Fruit Blast', 'Mega Win', 'Ocean Treasures']
  return (
    <>
      <Hero />
      <section className="panel">
        <h2>Hôm nay có gì hot?</h2>
        <div className="cards">
          <div className="card">Tặng thưởng chào mừng</div>
          <div className="card">Hoàn tiền thứ 2</div>
          <div className="card">Vòng quay miễn phí</div>
        </div>
      </section>
      <section className="panel">
        <h2>Slots phổ biến</h2>
        <div className="grid">
          {slots.map((name) => (
            <div key={name} className="slot-tile">{name}</div>
          ))}
        </div>
      </section>
    </>
  )
}
export default function Roulette() {
  return (
    <section>
      <h1>Roulette</h1>
      <p>Place your bets on red or black.</p>
      <div className="wheel">
        <div className="sector red" />
        <div className="sector black" />
        <div className="sector red" />
        <div className="sector black" />
      </div>
    </section>
  )
}
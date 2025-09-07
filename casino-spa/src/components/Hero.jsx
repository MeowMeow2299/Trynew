const AFF_URL = import.meta.env.VITE_AFFILIATE_URL || 'https://www.betbdt.vip/register?affiliateCode=soy001'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Play Smart. Win Big.</h1>
        <p>Welcome bonus và khuyến mãi hằng ngày cho người chơi mới.</p>
        <div className="hero-actions">
          <a className="btn primary" href={AFF_URL} target="_blank" rel="noreferrer">Đăng ký ngay</a>
          <a className="btn" href="/promotions">Ưu đãi hôm nay</a>
        </div>
      </div>
    </section>
  )
}


import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg'

const AFF_URL = import.meta.env.VITE_AFFILIATE_URL || 'https://www.betbdt.vip/register?affiliateCode=soy001'

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="logo-group">
        <a href="https://vite.dev" target="_blank" rel="noreferrer" title="Vite">
          <img src={viteLogo} alt="Vite" className="logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer" title="React">
          <img src={reactLogo} alt="React" className="logo react" />
        </a>
      </div>
      <a
        className="cta"
        href={AFF_URL}
        target="_blank"
        rel="noreferrer"
      >
        Register
      </a>
    </header>
  )
}
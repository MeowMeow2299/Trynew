import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import './casino.css'
import { sidebarLinks, generateRoutesFromSidebar } from './sidebarConfig'
import Home from './pages/Home'
import Slots from './pages/Slots'
import Blackjack from './pages/Blackjack'
import Roulette from './pages/Roulette'
import Promotions from './pages/Promotions'
import VIP from './pages/VIP'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">Casino Lite</div>
      <nav>
        {sidebarLinks.map((l) => (
          <Link className="nav-link" key={l.path} to={l.path}>
            <span className="icon">{l.icon}</span>
            <span>{l.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

function AppLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slots" element={<Slots />} />
          <Route path="/blackjack" element={<Blackjack />} />
          <Route path="/roulette" element={<Roulette />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/vip" element={<VIP />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  // Use the algorithm to validate routes (example usage)
  const routes = generateRoutesFromSidebar()
  if (routes.length < 5) {
    console.warn('Expected at least 5 routes from sidebar')
  }
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App

import { useRef, useState } from 'react'
import Header from './components/Header.jsx'
import MenuDrawer from './components/MenuDrawer.jsx'
import CvRoute from './components/cv/CvRoute.jsx'
import './App.css'

function App() {
  const [route, setRoute] = useState('cv')
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [revealed, setRevealed] = useState({ 0: true })

  const scrollRef = useRef(null)

  const navigate = (nextRoute) => {
    setRoute(nextRoute)
    setMenuOpen(false)
    const c = scrollRef.current
    if (c) c.scrollTop = 0
  }

  const handleScroll = () => {
    const c = scrollRef.current
    if (!c || route !== 'cv') return

    const secs = [...c.querySelectorAll('[data-sec]')]
    const st = c.scrollTop
    const revealMark = st + c.clientHeight * 0.84
    const activeMark = st + c.clientHeight * 0.34

    let nextActive = 0
    const nextRevealed = { ...revealed }
    secs.forEach((s, i) => {
      if (s.offsetTop <= activeMark) nextActive = i
      if (s.offsetTop <= revealMark) nextRevealed[i] = true
    })

    const max = c.scrollHeight - c.clientHeight
    const nextProgress = max > 0 ? Math.min(1, st / max) : 0

    setActive(nextActive)
    setProgress(nextProgress)
    setRevealed(nextRevealed)
  }

  const goTo = (i) => {
    const c = scrollRef.current
    if (!c) return
    const s = c.querySelectorAll('[data-sec]')[i]
    if (s) c.scrollTo({ top: Math.max(0, s.offsetTop - 24), behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <Header onGoHome={() => navigate('cv')} onToggleMenu={() => setMenuOpen((o) => !o)} />

      <main className="app-routes" ref={scrollRef} onScroll={handleScroll}>
        <div style={{ display: route === 'cv' ? 'block' : 'none' }}>
          <CvRoute
            active={active}
            progress={progress}
            revealed={revealed}
            onGo={goTo}
            onNavigate={navigate}
          />
        </div>
        <div className="route-panel" style={{ display: route === 'ai' ? 'block' : 'none' }}>
          ai
        </div>
        <div className="route-panel" style={{ display: route === 'contact' ? 'block' : 'none' }}>
          contact
        </div>
      </main>

      <MenuDrawer
        open={menuOpen}
        activeRoute={route}
        onClose={() => setMenuOpen(false)}
        onNavigate={navigate}
      />
    </div>
  )
}

export default App

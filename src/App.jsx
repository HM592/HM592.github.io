import { useRef, useState } from 'react'
import Header from './components/Header.jsx'
import MenuDrawer from './components/MenuDrawer.jsx'
import CvRoute from './components/cv/CvRoute.jsx'
import OpeningScreen from './components/opening/OpeningScreen.jsx'
import './App.css'

const REVISIT_STORAGE_KEY = 'cv-opened-at'
const REVISIT_WINDOW_MS = 5 * 60 * 1000 // 5 minutes

function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

function openedRecently() {
  try {
    const last = Number(localStorage.getItem(REVISIT_STORAGE_KEY))
    return Boolean(last) && Date.now() - last < REVISIT_WINDOW_MS
  } catch {
    return false
  }
}

// Runs once, synchronously, before the first paint — so a returning
// visitor (or anyone with reduced-motion set) never sees the opening
// animation flash on screen before it's skipped.
function getInitialOpened() {
  if (prefersReducedMotion()) return true
  if (openedRecently()) return true
  return false
}

function App() {
  const [opened, setOpened] = useState(getInitialOpened)
  const [route, setRoute] = useState('cv')
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [revealed, setRevealed] = useState({ 0: true })

  const scrollRef = useRef(null)

  const handleOpenClipboard = () => {
    setOpened(true)
    try {
      localStorage.setItem(REVISIT_STORAGE_KEY, String(Date.now()))
    } catch {
      // localStorage can throw in some locked-down browser contexts —
      // the animation still opens fine, it just won't be remembered.
    }
    setTimeout(() => {
      const c = scrollRef.current
      if (c) c.scrollTop = 0
    }, 60)
  }

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
      <OpeningScreen opened={opened} onOpen={handleOpenClipboard} />

      <Header
        visible={opened}
        onGoHome={() => navigate('cv')}
        onToggleMenu={() => setMenuOpen((o) => !o)}
      />

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

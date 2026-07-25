import { useState } from 'react'
import Header from './components/Header.jsx'
import MenuDrawer from './components/MenuDrawer.jsx'
import './App.css'

function App() {
  const [route, setRoute] = useState('cv')
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = (nextRoute) => {
    setRoute(nextRoute)
    setMenuOpen(false)
  }

  return (
    <div className="app-shell">
      <Header onGoHome={() => navigate('cv')} onToggleMenu={() => setMenuOpen((o) => !o)} />

      <main className="app-routes">
        <div className="route-panel" style={{ display: route === 'cv' ? 'block' : 'none' }}>
          cv
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

import { useEffect } from 'react'
import { cv } from '../data/cv.js'
import './MenuDrawer.css'

const NAV_ITEMS = [
  { route: 'cv', label: 'Home' },
  { route: 'ai', label: 'AI' },
  { route: 'contact', label: 'Contact' },
]

function MenuDrawer({ open, activeRoute, onClose, onNavigate }) {
  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  return (
    <>
      <div
        className={`menu-overlay${open ? ' menu-overlay--open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`menu-panel${open ? ' menu-panel--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <button
          type="button"
          className="menu-panel__close"
          onClick={onClose}
          aria-label="Close menu"
          tabIndex={open ? undefined : -1}
        >
          ×
        </button>
        <div className="menu-panel__eyebrow">Menu</div>
        <nav className="menu-panel__nav">
          {NAV_ITEMS.map((item) => (
            <button
              type="button"
              key={item.route}
              className={`menu-panel__item${
                activeRoute === item.route ? ' menu-panel__item--active' : ''
              }`}
              onClick={() => onNavigate(item.route)}
              tabIndex={open ? undefined : -1}
              aria-current={activeRoute === item.route ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="menu-panel__footer">
          {cv.name} · {cv.role}
        </div>
      </div>
    </>
  )
}

export default MenuDrawer

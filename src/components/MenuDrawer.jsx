import { cv } from '../data/cv.js'
import './MenuDrawer.css'

const NAV_ITEMS = [
  { route: 'cv', label: 'Home' },
  { route: 'ai', label: 'AI' },
  { route: 'contact', label: 'Contact' },
]

function MenuDrawer({ open, activeRoute, onClose, onNavigate }) {
  return (
    <>
      <div
        className={`menu-overlay${open ? ' menu-overlay--open' : ''}`}
        onClick={onClose}
      />
      <div className={`menu-panel${open ? ' menu-panel--open' : ''}`}>
        <div className="menu-panel__close" onClick={onClose}>
          ×
        </div>
        <div className="menu-panel__eyebrow">Menu</div>
        <nav className="menu-panel__nav">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.route}
              className={`menu-panel__item${
                activeRoute === item.route ? ' menu-panel__item--active' : ''
              }`}
              onClick={() => onNavigate(item.route)}
            >
              {item.label}
            </div>
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

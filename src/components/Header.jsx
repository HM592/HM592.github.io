import { cv } from '../data/cv.js'
import './Header.css'

function Header({ visible = true, onGoHome, onToggleMenu }) {
  return (
    <header className={`site-header${visible ? '' : ' site-header--hidden'}`}>
      <div className="site-header__identity" onClick={onGoHome}>
        {cv.name} <span className="site-header__role">{cv.role}</span>
      </div>
      <button
        type="button"
        className="site-header__hamburger"
        aria-label="Open menu"
        onClick={onToggleMenu}
      >
        <span />
        <span />
        <span className="site-header__hamburger-bar--short" />
      </button>
    </header>
  )
}

export default Header

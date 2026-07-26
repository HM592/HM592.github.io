import { cv } from '../data/cv.js'
import './Header.css'

function Header({ visible = true, onGoHome, onToggleMenu }) {
  // While the opening screen covers the header, its buttons are invisible
  // and inert (pointer-events: none in CSS) — tabIndex={-1} keeps Tab from
  // landing on them too, so keyboard focus can't get stuck on hidden controls.
  const hiddenTabIndex = visible ? undefined : -1

  return (
    <header className={`site-header${visible ? '' : ' site-header--hidden'}`}>
      <button
        type="button"
        className="site-header__identity"
        onClick={onGoHome}
        tabIndex={hiddenTabIndex}
      >
        {cv.name} <span className="site-header__role">{cv.role}</span>
      </button>
      <button
        type="button"
        className="site-header__hamburger"
        aria-label="Open menu"
        onClick={onToggleMenu}
        tabIndex={hiddenTabIndex}
      >
        <span />
        <span />
        <span className="site-header__hamburger-bar--short" />
      </button>
    </header>
  )
}

export default Header

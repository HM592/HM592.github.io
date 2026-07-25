import './Header.css'

function Header({ onGoHome, onToggleMenu }) {
  return (
    <header className="site-header">
      <div className="site-header__identity" onClick={onGoHome}>
        Jordan Avery{' '}
        <span className="site-header__role">SENIOR BUSINESS ANALYST</span>
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

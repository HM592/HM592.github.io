import { cv } from '../../data/cv.js'
import { MARQUEE_ROWS } from './marqueeRows.js'
import './OpeningScreen.css'

function MarqueeCard() {
  return (
    <div className="opening-card">
      <div className="opening-card__bar opening-card__bar--title" />
      <div className="opening-card__bar opening-card__bar--subtitle" />
      <div className="opening-card__row">
        <div className="opening-card__avatar" />
        <div className="opening-card__lines">
          <div className="opening-card__line opening-card__line--82" />
          <div className="opening-card__line opening-card__line--60" />
        </div>
      </div>
      <div className="opening-card__line opening-card__line--full" />
      <div className="opening-card__line opening-card__line--92" />
    </div>
  )
}

function OpeningScreen({ opened, onOpen }) {
  return (
    <div className={`opening-layer${opened ? ' opening-layer--opened' : ''}`}>
      <div className="opening-pile">
        {MARQUEE_ROWS.map((row, i) => (
          <div className="opening-pile__row" style={{ top: row.top }} key={i}>
            <div className="opening-pile__track" style={row.trackStyle}>
              {row.cards.map((c) => (
                <MarqueeCard key={c} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="opening-vignette" />

      <div className="opening-center">
        <div className="opening-clipboard-wrap">
          <button
            type="button"
            className="opening-clipboard"
            onClick={onOpen}
            aria-label="Open my CV"
            tabIndex={opened ? -1 : undefined}
          >
            <div className="opening-clipboard__clip-band" />
            <div className="opening-clipboard__clip-arm" />

            <div className="opening-clipboard__pen">
              <div className="opening-pen__body" />
              <div className="opening-pen__highlight" />
              <div className="opening-pen__grip" />
              <div className="opening-pen__clip" />
              <div className="opening-pen__cone" />
              <div className="opening-pen__nib" />
              <div className="opening-pen__point" />
            </div>

            <div className="opening-clipboard__paper">
              <div className="opening-clipboard__paper-texture" />
              <div className="opening-clipboard__paper-content">
                <div className="opening-clipboard__name">{cv.name}</div>
                <div className="opening-clipboard__role">{cv.role}</div>
                <div className="opening-clipboard__paper-body">
                  <div className="opening-clipboard__divider" />
                  <div className="opening-clipboard__row">
                    <div className="opening-clipboard__avatar" />
                    <div className="opening-clipboard__lines">
                      <div className="opening-clipboard__line opening-clipboard__line--90" />
                      <div className="opening-clipboard__line opening-clipboard__line--70" />
                      <div className="opening-clipboard__line opening-clipboard__line--82" />
                    </div>
                  </div>
                  <div className="opening-clipboard__line opening-clipboard__line--full" />
                  <div className="opening-clipboard__line opening-clipboard__line--96" />
                  <div className="opening-clipboard__line opening-clipboard__line--64" />
                  <div className="opening-clipboard__line opening-clipboard__line--full" />
                  <div className="opening-clipboard__line opening-clipboard__line--88" />
                </div>
              </div>
            </div>
          </button>
        </div>

        <div className="opening-prompt">
          <div className="opening-prompt__text">Click the clipboard to open my CV</div>
        </div>

        <div className="opening-reveal">
          <div className="opening-reveal__text">Opening full CV…</div>
        </div>
      </div>
    </div>
  )
}

export default OpeningScreen

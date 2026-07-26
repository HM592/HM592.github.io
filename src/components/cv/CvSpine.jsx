import { CV_SECTIONS } from './sections.js'

function CvSpine({ active, progress, onGo }) {
  return (
    <div className="spine-col">
      <div className="spine-sticky">
        <div className="spine-track">
          <div className="spine-line" />
          <div className="spine-fill" style={{ height: `${progress * 100}%` }} />
          {CV_SECTIONS.map((name, i) => {
            const isActive = i === active
            const done = i <= active
            return (
              <button
                type="button"
                key={name}
                className="spine-dot-row"
                onClick={() => onGo(i)}
                aria-current={isActive ? 'true' : undefined}
              >
                <span
                  className={`spine-dot${isActive ? ' spine-dot--active' : ''}${
                    done ? ' spine-dot--done' : ''
                  }`}
                />
                <div className={`spine-label${isActive ? ' spine-label--active' : ''}`}>
                  {name}
                </div>
                {isActive && <div className="spine-now-reading">Now reading</div>}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CvSpine

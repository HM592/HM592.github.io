import { CV_SECTIONS } from './sections.js'

function CvMobileBar({ active, onGo }) {
  return (
    <div className="topbar-col">
      <div className="mobile-dots">
        {CV_SECTIONS.map((name, i) => {
          const done = i <= active
          return (
            <div key={name} className="mobile-dot-group" onClick={() => onGo(i)}>
              <span
                className={`mobile-dot${done ? ' mobile-dot--done' : ''}${
                  i === active ? ' mobile-dot--active' : ''
                }`}
              />
              {i < CV_SECTIONS.length - 1 && (
                <div
                  className={`mobile-bar${
                    i < active ? ' mobile-bar--done' : i === active ? ' mobile-bar--current' : ''
                  }`}
                />
              )}
            </div>
          )
        })}
      </div>
      <div className="mobile-active-label">{CV_SECTIONS[active]}</div>
    </div>
  )
}

export default CvMobileBar

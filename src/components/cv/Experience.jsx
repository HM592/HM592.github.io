import LogoCutout from './LogoCutout.jsx'

function Experience({ data, logo, revealed }) {
  return (
    <div data-sec className={`cv-section${revealed ? ' cv-section--revealed' : ''}`}>
      <div className="cv-eyebrow">02 — Experience</div>
      <div className="entry-list">
        {data.map((entry) => (
          <div className="entry-row" key={`${entry.company}-${entry.title}`}>
            <div className="entry-side entry-side--wide">
              <div className="entry-date">{entry.dateRange}</div>
              {logo && (
                <div className="entry-side-logo">
                  <LogoCutout
                    src={logo.src}
                    alt={logo.alt}
                    label="logo"
                    className="logo-cutout--company"
                    background={logo.background}
                  />
                </div>
              )}
            </div>
            <div className="entry-body">
              <div className="entry-title">{entry.title}</div>
              <div className="entry-org">{entry.company}</div>
              <p className="entry-description">{entry.description}</p>
              <ul className="entry-achievements">
                {entry.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience

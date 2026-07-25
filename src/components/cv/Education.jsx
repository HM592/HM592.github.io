import LogoCutout from './LogoCutout.jsx'

function Education({ data, revealed }) {
  return (
    <div data-sec className={`cv-section${revealed ? ' cv-section--revealed' : ''}`}>
      <div className="cv-eyebrow">03 — Education</div>
      <div className="entry-list">
        {data.map((entry) => (
          <div className="entry-row" key={`${entry.institution}-${entry.title}`}>
            <LogoCutout
              src={entry.logo?.src}
              alt={entry.logo?.alt}
              label="logo"
              className="logo-cutout--institution"
              background={entry.logo?.background}
            />
            <div className="entry-side">
              <div className="entry-date">{entry.dateRange}</div>
            </div>
            <div className="entry-body">
              <div className="entry-title">{entry.title}</div>
              <div className="entry-org">{entry.institution}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education

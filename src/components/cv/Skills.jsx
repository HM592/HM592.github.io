function Skills({ data, revealed, onAskAI, onGetInTouch }) {
  return (
    <div data-sec className={`cv-section cv-section--last${revealed ? ' cv-section--revealed' : ''}`}>
      <div className="cv-eyebrow">04 — Skills</div>
      <div className="skill-chips">
        {data.map((skill) => (
          <span className="skill-chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
      <div className="cv-cta-row">
        <div className="cv-cta cv-cta--solid" onClick={onAskAI}>
          Ask my AI about me →
        </div>
        <div className="cv-cta cv-cta--outline" onClick={onGetInTouch}>
          Get in touch
        </div>
      </div>
    </div>
  )
}

export default Skills

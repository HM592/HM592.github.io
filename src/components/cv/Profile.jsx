import LogoCutout from './LogoCutout.jsx'

function Profile({ data, revealed }) {
  return (
    <div data-sec className={`cv-section cv-section--first${revealed ? ' cv-section--revealed' : ''}`}>
      <div className="cv-eyebrow">01 — Profile</div>
      <div className="profile-row">
        <LogoCutout label="portrait" className="logo-cutout--portrait" />
        <div className="profile-copy">
          <div className="profile-headline">{data.headline}</div>
          <p className="profile-paragraph">{data.paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile

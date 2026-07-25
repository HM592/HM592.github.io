import { cv } from '../../data/cv.js'
import CvSpine from './CvSpine.jsx'
import CvMobileBar from './CvMobileBar.jsx'
import Profile from './Profile.jsx'
import Experience from './Experience.jsx'
import Education from './Education.jsx'
import Skills from './Skills.jsx'
import './Cv.css'

function CvRoute({ active, progress, revealed, onGo, onNavigate }) {
  return (
    <div className="cv-route">
      <CvMobileBar active={active} onGo={onGo} />
      <div className="cv-flex">
        <CvSpine active={active} progress={progress} onGo={onGo} />
        <div className="cv-body">
          <Profile data={cv.profile} revealed={revealed[0]} />
          <Experience data={cv.experience} logo={cv.experienceLogo} revealed={revealed[1]} />
          <Education data={cv.education} revealed={revealed[2]} />
          <Skills
            data={cv.skills}
            revealed={revealed[3]}
            onAskAI={() => onNavigate('ai')}
            onGetInTouch={() => onNavigate('contact')}
          />
        </div>
      </div>
    </div>
  )
}

export default CvRoute

import { useState } from 'react'
import ChatPanel from './ChatPanel.jsx'
import './Ai.css'

function AiRoute() {
  const [tab, setTab] = useState('chat')

  return (
    <div className="ai-route">
      <div className="ai-inner">
        <div className="ai-eyebrow">Interactive</div>
        <div className="ai-h1">Talk to my work</div>
        <p className="ai-paragraph">
          Ask questions about my experience, skills, or fit for a role — answered straight from my
          CV.
        </p>

        <div className="ai-tabs" role="tablist" aria-label="AI demos">
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'chat'}
            className={`ai-tab${tab === 'chat' ? ' ai-tab--active' : ''}`}
            onClick={() => setTab('chat')}
          >
            Ask about me
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'game'}
            className={`ai-tab${tab === 'game' ? ' ai-tab--active' : ''}`}
            onClick={() => setTab('game')}
          >
            Prioritisation game
          </button>
        </div>

        <div style={{ display: tab === 'chat' ? 'block' : 'none' }}>
          <ChatPanel />
        </div>
        {tab === 'game' && <div className="ai-game-placeholder">Coming soon.</div>}
      </div>
    </div>
  )
}

export default AiRoute

import { useEffect, useRef, useState } from 'react'
import { cv } from '../../data/cv.js'

// Replace with the URL `npx wrangler deploy` prints (see worker/README.md),
// e.g. "https://hm592-ai-chat.<your-subdomain>.workers.dev". Not a secret —
// it's the public endpoint the browser calls; all real protection
// (origin check, rate limiting, validation) lives server-side in the Worker.
const AI_WORKER_URL = 'https://hm592-ai-chat.hm592-gate.workers.dev'

const CLIENT_TIMEOUT_MS = 15000
const MAX_HISTORY_MESSAGES = 6 // last 2-3 turns

const STARTER_QUESTIONS = [
  "What's his most recent role?",
  'What tools does he use day-to-day?',
  'Does he have stakeholder management experience?',
  "What's his educational background?",
]

function firstName(fullName) {
  return fullName.split(' ')[0]
}

function ChatPanel() {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: `Hi — I'm ${firstName(cv.name)}'s assistant. Ask me anything about his experience, skills or fit for a role.`,
    },
  ])
  const [input, setInput] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending
  const [errorText, setErrorText] = useState(null)

  const listRef = useRef(null)

  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, errorText, status])

  const sending = status === 'sending'

  const handleSend = async (questionOverride) => {
    const question = (questionOverride ?? input).trim()
    if (!question || sending) return

    setErrorText(null)
    setInput('')
    const history = messages.slice(-MAX_HISTORY_MESSAGES).map((m) => ({ role: m.role, text: m.text }))
    setMessages((prev) => [...prev, { role: 'user', text: question }])
    setStatus('sending')

    const controller = new AbortController()
    const clientTimeout = setTimeout(() => controller.abort(), CLIENT_TIMEOUT_MS)

    try {
      const res = await fetch(AI_WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, history }),
        signal: controller.signal,
      })

      let data = null
      try {
        data = await res.json()
      } catch {
        data = null
      }

      if (res.ok && data && typeof data.reply === 'string') {
        setMessages((prev) => [...prev, { role: 'bot', text: data.reply }])
      } else if (data && typeof data.error === 'string') {
        setErrorText(data.error)
      } else {
        setErrorText('Something went wrong — please try again, or use the contact form.')
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        setErrorText("That's taking too long — please try again.")
      } else {
        setErrorText("Couldn't reach the assistant — check your connection and try again.")
      }
    } finally {
      clearTimeout(clientTimeout)
      setStatus('idle')
    }
  }

  return (
    <div className="chat-panel">
      <div className="chat-messages" ref={listRef}>
        {messages.map((m, i) => (
          <div key={i} className={`chat-bubble chat-bubble--${m.role}`}>
            {m.text}
          </div>
        ))}
        {sending && (
          <div className="chat-bubble chat-bubble--bot chat-bubble--loading" aria-live="polite">
            Thinking…
          </div>
        )}
      </div>

      {errorText && (
        <div className="chat-error" role="alert">
          {errorText}
        </div>
      )}

      <div className="chat-starters">
        {STARTER_QUESTIONS.map((q) => (
          <button
            key={q}
            type="button"
            className="chat-starter"
            onClick={() => handleSend(q)}
            disabled={sending}
          >
            {q}
          </button>
        ))}
      </div>

      <form
        className="chat-input-row"
        onSubmit={(e) => {
          e.preventDefault()
          handleSend()
        }}
      >
        <label className="sr-only" htmlFor="chat-input">
          Your question
        </label>
        <input
          id="chat-input"
          type="text"
          className="chat-input"
          placeholder="Ask a question…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={sending}
          maxLength={500}
        />
        <button type="submit" className="chat-send" disabled={sending || !input.trim()}>
          {sending ? 'Sending…' : 'Send'}
        </button>
      </form>

      <p className="chat-disclaimer">Answers are based only on my CV.</p>
    </div>
  )
}

export default ChatPanel

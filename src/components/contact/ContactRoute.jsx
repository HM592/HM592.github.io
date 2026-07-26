import { useState } from 'react'
import { cv } from '../../data/cv.js'
import './Contact.css'

// Web3Forms access keys are meant to be used client-side — this is the
// public key tied to this site's Web3Forms account, not a secret.
const WEB3FORMS_ACCESS_KEY = '04d23f7e-70a9-41a4-90c0-4f7224833f37'
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

function ContactRoute() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | sent | error
  const [errorMessage, setErrorMessage] = useState('')
  const [sentName, setSentName] = useState('')

  const submitting = status === 'submitting'

  const resetForm = () => {
    setStatus('idle')
    setErrorMessage('')
    setName('')
    setEmail('')
    setMessage('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot: real visitors never see or fill this field. If it has a
    // value, a bot filled it in — reject silently, no request, no message.
    if (honeypot) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
          subject: `New message from ${name || 'your CV site'}`,
        }),
      })
      const data = await res.json()

      if (data.success) {
        setSentName(name.trim() || 'there')
        setStatus('sent')
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Something went wrong — please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error — please check your connection and try again.')
    }
  }

  return (
    <div className="contact-route">
      <div className="contact-inner">
        <div className="contact-eyebrow">Contact</div>
        <div className="contact-h1">Let's talk</div>
        <p className="contact-paragraph">
          Hiring, contracting, or just comparing notes on discovery frameworks — drop a line.
        </p>

        <div className="contact-columns">
          <div className="contact-form-col">
            {status !== 'sent' ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Honeypot — hidden from sighted and screen-reader users alike,
                    and skipped in tab order. Bots that auto-fill every field
                    trip it; real people never see it. */}
                <input
                  type="text"
                  name="botcheck"
                  className="contact-honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />

                <label className="sr-only" htmlFor="contact-name">
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="contact-input"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={submitting}
                  required
                />

                <label className="sr-only" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="contact-input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                  required
                />

                <label className="sr-only" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact-input contact-textarea"
                  placeholder="Message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={submitting}
                  required
                />

                {status === 'error' && (
                  <div className="contact-error" role="alert">
                    {errorMessage}
                  </div>
                )}

                <button type="submit" className="contact-submit" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send message'}
                </button>
              </form>
            ) : (
              <div className="contact-success" role="status">
                <div className="contact-success__title">Thanks, {sentName}.</div>
                <p className="contact-success__text">
                  Your message is noted — I'll be in touch soon.{' '}
                  <button type="button" className="contact-reset-link" onClick={resetForm}>
                    Send another
                  </button>
                </p>
              </div>
            )}
          </div>

          <div className="contact-details-col">
            <div className="contact-detail">
              <div className="contact-detail__label">Email</div>
              <div className="contact-detail__value">
                <a href={`mailto:${cv.contact.email}`}>{cv.contact.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactRoute

'use client'

import { useState, useEffect } from 'react'

interface GuestbookEntry {
  id: string
  name: string
  message: string
  created_at: string
}

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const wordCount = message.trim().split(/\s+/).filter(word => word.length > 0).length

  useEffect(() => {
    fetchEntries()
  }, [])

  const fetchEntries = async () => {
    try {
      const response = await fetch('/api/guestbook')
      if (response.ok) {
        const data = await response.json()
        setEntries(data)
      } else {
        console.error('Failed to fetch entries')
        setError('Failed to load entries')
      }
    } catch (error) {
      console.error('Error fetching entries:', error)
      setError('Failed to load entries')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setSuccess('')

    const trimmedName = name.trim()
    const trimmedMessage = message.trim()

    // Client-side validation
    if (!trimmedName || !trimmedMessage) {
      setError('Name and message are required')
      setIsSubmitting(false)
      return
    }

    if (trimmedName.length > 50) {
      setError('Name must be 50 characters or less')
      setIsSubmitting(false)
      return
    }

    if (trimmedMessage.length > 1000) {
      setError('Message must be 1000 characters or less')
      setIsSubmitting(false)
      return
    }

    if (wordCount > 250) {
      setError('Message must be 250 words or less')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: trimmedName, message: trimmedMessage }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess('🌟 Thanks for signing my guestbook! 🌟')
        setName('')
        setMessage('')
        // Add the new entry to the top of the list
        setEntries(prev => [data, ...prev.slice(0, 9)])
      } else {
        setError(data.error || 'Failed to submit entry')
      }
    } catch (error) {
      console.error('Error submitting entry:', error)
      setError('Failed to submit entry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <section id="guestbook" className="guestbook" style={{
      padding: '3rem 0',
      background: 'var(--bg-light)',
      border: '5px solid var(--accent-color)',
      borderStyle: 'double'
    }}>
      <div className="container">
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'var(--text-dark)',
          fontFamily: 'Comic Sans MS',
          textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
          animation: 'rainbow 3s linear infinite'
        }}>
          📝 SIGN MY RADICAL GUESTBOOK! 📝
        </h2>
        
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          padding: '1rem',
          background: 'rgba(255,215,0,0.3)',
          border: '3px dashed var(--primary-color)',
          fontFamily: 'Comic Sans MS',
          fontWeight: 'bold',
          animation: 'pulse 2s infinite alternate'
        }}>
          🌟 BE PART OF THE CYBER REVOLUTION! LEAVE YOUR MARK! 🌟
        </div>

        {/* Submission Form */}
        <div style={{
          background: 'var(--bg-white)',
          padding: '2rem',
          borderRadius: 'var(--border-radius)',
          border: '3px solid var(--secondary-color)',
          marginBottom: '3rem',
          boxShadow: 'var(--shadow-medium)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '900',
            marginBottom: '1.5rem',
            color: 'var(--primary-color)',
            fontFamily: 'Comic Sans MS',
            textAlign: 'center',
            textTransform: 'uppercase'
          }}>
            ⚡ JOIN THE GUEST LIST ⚡
          </h3>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold',
                color: 'var(--text-light)',
                fontFamily: 'Comic Sans MS'
              }}>
                🌟 Your Cyber Name: *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid var(--border-light)',
                  borderRadius: 'var(--border-radius)',
                  fontSize: '16px', /* PREVENT ZOOM ON iOS */
                  fontFamily: 'Comic Sans MS, Trebuchet MS, cursive, sans-serif',
                  background: 'var(--bg-light)',
                  color: 'var(--text-light)',
                  minHeight: '44px' /* TOUCH TARGET SIZE */
                }}
                placeholder="Enter your awesome name here!"
              />
              <small style={{
                color: 'var(--text-light)',
                fontSize: '0.8rem',
                fontFamily: 'Comic Sans MS'
              }}>
                {name.length}/50 characters
              </small>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold',
                color: 'var(--text-light)',
                fontFamily: 'Comic Sans MS'
              }}>
                💫 Your Radical Message: *
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid var(--border-light)',
                  borderRadius: 'var(--border-radius)',
                  fontSize: '16px', /* PREVENT ZOOM ON iOS */
                  fontFamily: 'Comic Sans MS, Trebuchet MS, cursive, sans-serif',
                  resize: 'vertical',
                  background: 'var(--bg-light)',
                  color: 'var(--text-light)',
                  lineHeight: '1.5' /* IMPROVED READABILITY */
                }}
                placeholder="Share your thoughts about my cyber domain!"
              />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '0.5rem'
              }}>
                <small style={{
                  color: wordCount > 250 ? 'var(--primary-color)' : 'var(--text-light)',
                  fontSize: '0.8rem',
                  fontFamily: 'Comic Sans MS',
                  fontWeight: wordCount > 250 ? 'bold' : 'normal'
                }}>
                  {wordCount}/250 words
                </small>
                <small style={{
                  color: 'var(--text-light)',
                  fontSize: '0.8rem',
                  fontFamily: 'Comic Sans MS'
                }}>
                  {message.length}/1000 characters
                </small>
              </div>
            </div>

            {error && (
              <div style={{
                background: 'rgba(255, 20, 147, 0.2)',
                border: '2px solid var(--primary-color)',
                padding: '1rem',
                borderRadius: 'var(--border-radius)',
                marginBottom: '1rem',
                color: 'var(--primary-color)',
                fontFamily: 'Comic Sans MS',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                🚨 {error} 🚨
              </div>
            )}

            {success && (
              <div style={{
                background: 'rgba(0, 255, 0, 0.2)',
                border: '2px solid var(--secondary-color)',
                padding: '1rem',
                borderRadius: 'var(--border-radius)',
                marginBottom: '1rem',
                color: 'var(--secondary-color)',
                fontFamily: 'Comic Sans MS',
                fontWeight: 'bold',
                textAlign: 'center',
                animation: 'blink 1s infinite alternate'
              }}>
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || wordCount > 250}
              className="btn btn-primary"
              style={{
                width: '100%',
                opacity: (isSubmitting || wordCount > 250) ? 0.6 : 1,
                cursor: (isSubmitting || wordCount > 250) ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? '🚀 SUBMITTING TO CYBERSPACE... 🚀' : '✨ SIGN THE GUESTBOOK! ✨'}
            </button>
          </form>
        </div>

        {/* Entries Display */}
        <div style={{
          background: 'var(--bg-white)',
          padding: '2rem',
          borderRadius: 'var(--border-radius)',
          border: '3px solid var(--accent-color)',
          boxShadow: 'var(--shadow-medium)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '900',
            marginBottom: '2rem',
            color: 'var(--accent-color)',
            fontFamily: 'Comic Sans MS',
            textAlign: 'center',
            textTransform: 'uppercase'
          }}>
            🌟 RECENT VISITORS TO MY CYBER REALM 🌟
          </h3>

          {isLoading ? (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              color: 'var(--text-light)',
              fontFamily: 'Comic Sans MS',
              animation: 'pulse 1s infinite alternate'
            }}>
              💫 Loading guestbook entries from the matrix... 💫
            </div>
          ) : entries.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              color: 'var(--text-light)',
              fontFamily: 'Comic Sans MS',
              background: 'rgba(255, 215, 0, 0.1)',
              border: '2px dashed var(--accent-color)',
              borderRadius: 'var(--border-radius)'
            }}>
              🎯 Be the first to sign my guestbook! 🎯<br/>
              <small>Start the cyber revolution!</small>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  style={{
                    background: 'var(--bg-light)',
                    padding: '1.5rem',
                    borderRadius: 'var(--border-radius)',
                    border: '2px solid var(--border-light)',
                    transition: 'var(--transition)',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-light)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <strong style={{
                      color: 'var(--primary-color)',
                      fontFamily: 'Comic Sans MS',
                      fontSize: '1.1rem'
                    }}>
                      ⭐ {entry.name}
                    </strong>
                    <small style={{
                      color: 'var(--text-light)',
                      fontFamily: 'Comic Sans MS',
                      fontSize: '0.8rem'
                    }}>
                      {formatDate(entry.created_at)}
                    </small>
                  </div>
                  <p style={{
                    color: 'var(--text-light)',
                    lineHeight: '1.6',
                    margin: 0,
                    fontFamily: 'Comic Sans MS',
                    fontSize: '0.95rem'
                  }}>
                    {entry.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          padding: '1rem',
          background: 'rgba(0, 255, 255, 0.2)',
          border: '2px dashed var(--secondary-color)',
          borderRadius: 'var(--border-radius)',
          fontFamily: 'Comic Sans MS',
          fontSize: '0.9rem',
          color: 'var(--text-light)'
        }}>
          💾 Powered by Supabase magic and 90s nostalgia! 💾<br/>
          <small>Only the latest 10 entries are shown to keep things fresh!</small>
        </div>
      </div>
    </section>
  )
}
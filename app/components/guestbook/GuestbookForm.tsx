'use client';

import { useState } from 'react';
import { validateEntry, type CreateEntryInput } from '../../../lib/guestbook-simple';

export function GuestbookForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const validationError = validateEntry({ name, message });
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit');
      }

      setSuccess('Thank you for signing the guestbook!');
      setName('');
      setMessage('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const wordCount = message.trim().split(/\s+/).filter(w => w).length;

  return (
    <div className="guestbook-form-container">
      <h3 className="guestbook-form-title">Share Your Thoughts</h3>

      {error && <div className="guestbook-alert error">{error}</div>}
      {success && <div className="guestbook-alert success">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="guestbook-form-group">
          <label className="guestbook-label">Your Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50}
            required
            className="guestbook-input"
            placeholder="Enter your name"
          />
          <small>{name.length}/50 characters</small>
        </div>

        <div className="guestbook-form-group">
          <label className="guestbook-label">Your Message *</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={1000}
            required
            rows={4}
            className="guestbook-textarea"
            placeholder="Share your thoughts..."
          />
          <div className="guestbook-char-count">
            <small>{wordCount}/250 words</small>
            <small>{message.length}/1000 characters</small>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary"
          style={{ width: '100%' }}
        >
          {loading ? 'Submitting...' : 'Sign Guestbook'}
        </button>
      </form>
    </div>
  );
}

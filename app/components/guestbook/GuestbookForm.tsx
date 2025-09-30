'use client';

import { useState, useMemo } from 'react';
import { 
  useFormValidation, 
  useInputCounts, 
  GuestbookValidationService,
  DEFAULT_GUESTBOOK_CONFIG,
  type CreateGuestbookEntryInput 
} from '../../../lib/guestbook/client';

interface GuestbookFormProps {
  onSubmit: (input: CreateGuestbookEntryInput) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  success: string | null;
  onClearMessages: () => void;
}

export function GuestbookForm({ 
  onSubmit, 
  isLoading, 
  error, 
  success, 
  onClearMessages 
}: GuestbookFormProps) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Create validator instance
  const validator = useMemo(() => 
    new GuestbookValidationService(DEFAULT_GUESTBOOK_CONFIG), 
    []
  );

  const { validation, validateField, validateForm, clearValidation } = useFormValidation(validator);
  const { getCharacterCount, getWordCount, getCharacterLimit, getWordLimit } = useInputCounts(validator);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClearMessages();

    const input = { name, message };
    
    if (!validateForm(input)) {
      return;
    }

    try {
      await onSubmit(input);
      // Reset form on success
      setName('');
      setMessage('');
      clearValidation();
    } catch (err) {
      // Error is handled by the parent component
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    validateField('name', value);
    onClearMessages();
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);
    validateField('message', value);
    onClearMessages();
  };

  return (
    <div className="guestbook-form-container">
      <h3 className="guestbook-form-title">
        Share Your Thoughts
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="guestbook-form-group">
          <label className="guestbook-label">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            maxLength={getCharacterLimit.name}
            required
            className={`guestbook-input ${!validation.name.isValid && validation.name.errors.length > 0 ? 'error' : ''}`}
            placeholder="Enter your name"
          />
          <div className="guestbook-char-count">
            <small className={!validation.name.isValid && validation.name.errors.length > 0 ? 'error' : ''}>
              {validation.name.errors.length > 0 ? validation.name.errors[0] : `${getCharacterCount(name)}/${getCharacterLimit.name} characters`}
            </small>
          </div>
        </div>

        <div className="guestbook-form-group">
          <label className="guestbook-label">
            Your Message *
          </label>
          <textarea
            name="message"
            value={message}
            onChange={handleMessageChange}
            maxLength={getCharacterLimit.message}
            required
            rows={4}
            className={`guestbook-textarea ${!validation.message.isValid && validation.message.errors.length > 0 ? 'error' : ''}`}
            placeholder="Share your thoughts..."
          />
          <div className="guestbook-char-count">
            <small className={!validation.message.isValid && validation.message.errors.length > 0 ? 'error' : ''}>
              {validation.message.errors.length > 0 ? validation.message.errors[0] : `${getWordCount(message)}/${getWordLimit} words`}
            </small>
            <small>
              {getCharacterCount(message)}/{getCharacterLimit.message} characters
            </small>
          </div>
        </div>

        {error && (
          <div className="guestbook-alert error">
            {error}
          </div>
        )}

        {success && (
          <div className="guestbook-alert success">
            {success}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading || !validation.isFormValid}
          className="btn btn-primary"
          style={{
            width: '100%',
            opacity: isLoading || !validation.isFormValid ? 0.6 : 1,
            cursor: isLoading || !validation.isFormValid ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Submitting...' : 'Sign Guestbook'}
        </button>
      </form>
    </div>
  );
}
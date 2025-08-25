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
            name="name"
            value={name}
            onChange={handleNameChange}
            maxLength={getCharacterLimit.name}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: `2px solid ${!validation.name.isValid && validation.name.errors.length > 0 ? 'var(--primary-color)' : 'var(--border-light)'}`,
              borderRadius: 'var(--border-radius)',
              fontSize: '16px',
              fontFamily: 'Comic Sans MS, Trebuchet MS, cursive, sans-serif',
              background: 'var(--bg-light)',
              color: 'var(--text-light)',
              minHeight: '44px'
            }}
            placeholder="Enter your awesome name here!"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
            <small style={{
              color: !validation.name.isValid && validation.name.errors.length > 0 ? 'var(--primary-color)' : 'var(--text-light)',
              fontSize: '0.8rem',
              fontFamily: 'Comic Sans MS'
            }}>
              {validation.name.errors.length > 0 ? validation.name.errors[0] : `${getCharacterCount(name)}/${getCharacterLimit.name} characters`}
            </small>
          </div>
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
            name="message"
            value={message}
            onChange={handleMessageChange}
            maxLength={getCharacterLimit.message}
            required
            rows={4}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: `2px solid ${!validation.message.isValid && validation.message.errors.length > 0 ? 'var(--primary-color)' : 'var(--border-light)'}`,
              borderRadius: 'var(--border-radius)',
              fontSize: '16px',
              fontFamily: 'Comic Sans MS, Trebuchet MS, cursive, sans-serif',
              resize: 'vertical',
              background: 'var(--bg-light)',
              color: 'var(--text-light)',
              lineHeight: '1.5'
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
              color: !validation.message.isValid && validation.message.errors.length > 0 ? 'var(--primary-color)' : 'var(--text-light)',
              fontSize: '0.8rem',
              fontFamily: 'Comic Sans MS'
            }}>
              {validation.message.errors.length > 0 ? validation.message.errors[0] : `${getWordCount(message)}/${getWordLimit} words`}
            </small>
            <small style={{
              color: 'var(--text-light)',
              fontSize: '0.8rem',
              fontFamily: 'Comic Sans MS'
            }}>
              {getCharacterCount(message)}/{getCharacterLimit.message} characters
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
          disabled={isLoading || !validation.isFormValid}
          className="btn btn-primary"
          style={{
            width: '100%',
            opacity: isLoading || !validation.isFormValid ? 0.6 : 1,
            cursor: isLoading || !validation.isFormValid ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? '🚀 SUBMITTING TO CYBERSPACE... 🚀' : '✨ SIGN THE GUESTBOOK! ✨'}
        </button>
      </form>
    </div>
  );
}
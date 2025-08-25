'use client';

import { useMemo } from 'react';
import { 
  useGuestbook, 
  createClientGuestbookService,
  type GuestbookEntry 
} from '../../../lib/guestbook/client';
import { GuestbookForm } from './GuestbookForm';
import { GuestbookEntries } from './GuestbookEntries';

interface GuestbookContainerProps {
  initialEntries?: GuestbookEntry[];
}

export default function GuestbookContainer({ initialEntries = [] }: GuestbookContainerProps) {
  // Create service instance with dependency injection
  const service = useMemo(() => {
    return createClientGuestbookService();
  }, []);

  const { entries, isLoading, error, success, createEntry, clearMessages } = useGuestbook(service);

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

        <GuestbookForm
          onSubmit={createEntry}
          isLoading={isLoading}
          error={error}
          success={success}
          onClearMessages={clearMessages}
        />

        <GuestbookEntries
          entries={entries}
          isLoading={isLoading}
        />

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
  );
}
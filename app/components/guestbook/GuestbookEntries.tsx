/**
 * Component for displaying guestbook entries
 * Handles rendering of entry list with loading and empty states
 */

'use client';

import type { GuestbookEntry } from '../../../lib/guestbook/client';

interface GuestbookEntriesProps {
  entries: GuestbookEntry[];
  isLoading: boolean;
}

export function GuestbookEntries({ entries, isLoading }: GuestbookEntriesProps) {
  
  // Loading state
  if (isLoading) {
    return (
      <div style={{
        background: 'var(--bg-white)',
        padding: '2rem',
        borderRadius: 'var(--border-radius)',
        border: '3px solid var(--accent-color)',
        boxShadow: 'var(--shadow-medium)',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '1.2rem',
          color: 'var(--text-light)',
          fontFamily: 'Comic Sans MS',
          animation: 'pulse 2s infinite alternate'
        }}>
          🔄 Loading cyber messages... 🔄
        </div>
      </div>
    )
  }

  return (
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

      {entries.length === 0 ? (
        <EmptyState message="Be the first to sign my guestbook! Start the cyber revolution!" />
      ) : (
        <EntriesList entries={entries} />
      )}
    </div>
  )
}

// Empty state component
function EmptyState({ message }: { message: string }) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem',
      color: 'var(--text-light)',
      fontFamily: 'Comic Sans MS',
      background: 'rgba(255, 215, 0, 0.1)',
      border: '2px dashed var(--accent-color)',
      borderRadius: 'var(--border-radius)'
    }}>
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        🎯
      </div>
      <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
        {message}
      </div>
    </div>
  )
}

// Entries list component
function EntriesList({ entries }: { entries: GuestbookEntry[] }) {
  return (
    <div style={{ 
      display: 'grid', 
      gap: '1.5rem'
    }}>
      {entries.map((entry, index) => (
        <div
          key={entry.id}
          style={{
            background: 'var(--bg-white)',
            padding: '1.5rem',
            borderRadius: 'var(--border-radius)',
            border: `3px solid ${index % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)'}`,
            boxShadow: 'var(--shadow-medium)',
            position: 'relative',
            animation: `slideInFromLeft 0.6s ease-out ${index * 0.1}s both`
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '1rem',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            <div style={{
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: index % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)',
              fontFamily: 'Comic Sans MS',
              wordBreak: 'break-word'
            }}>
              👤 {entry.name}
            </div>
            <div style={{
              fontSize: '0.8rem',
              color: 'var(--text-light)',
              fontFamily: 'Comic Sans MS',
              opacity: 0.8,
              whiteSpace: 'nowrap'
            }}>
              📅 {new Date(entry.created_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })} ⏰ {new Date(entry.created_at).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </div>
          
          <div style={{
            fontSize: '1rem',
            color: 'var(--text-dark)',
            fontFamily: 'Comic Sans MS, Trebuchet MS, cursive, sans-serif',
            lineHeight: '1.5',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap',
            padding: '0.75rem',
            background: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 'calc(var(--border-radius) * 0.5)',
            border: '2px dashed rgba(255, 20, 147, 0.3)'
          }}>
            💬 {entry.message}
          </div>

        </div>
      ))}
    </div>
  )
}
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
      <div className="guestbook-entries-container">
        <div className="guestbook-loading">
          Loading entries...
        </div>
      </div>
    )
  }

  return (
    <div className="guestbook-entries-container">
      <h3 className="guestbook-entries-title">
        Recent Entries
      </h3>

      {entries.length === 0 ? (
        <EmptyState message="Be the first to sign the guestbook!" />
      ) : (
        <EntriesList entries={entries} />
      )}
    </div>
  )
}

// Empty state component
function EmptyState({ message }: { message: string }) {
  return (
    <div className="guestbook-empty">
      <div className="guestbook-empty-icon">
        📝
      </div>
      <div className="guestbook-empty-message">
        {message}
      </div>
    </div>
  )
}

// Entries list component
function EntriesList({ entries }: { entries: GuestbookEntry[] }) {
  return (
    <div className="guestbook-entries-list">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="guestbook-entry"
        >
          <div className="guestbook-entry-header">
            <div className="guestbook-entry-name">
              {entry.name}
            </div>
            <div className="guestbook-entry-date">
              {new Date(entry.created_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })} • {new Date(entry.created_at).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </div>

          <div className="guestbook-entry-message">
            {entry.message}
          </div>

        </div>
      ))}
    </div>
  )
}
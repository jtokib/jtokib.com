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
    <section id="guestbook" className="guestbook">
      <div className="container">
        <h2 className="guestbook-header">
          Sign the Guestbook
        </h2>

        <div className="guestbook-intro">
          Leave your mark! Share your thoughts about marketing technology, surf forecasting, or just say hello.
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

        <div className="guestbook-footer">
          Powered by Supabase • Latest 10 entries shown
        </div>
      </div>
    </section>
  );
}
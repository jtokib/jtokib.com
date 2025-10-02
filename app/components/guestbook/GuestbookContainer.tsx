'use client';

import { useState, useEffect } from 'react';
import { GuestbookForm } from './GuestbookForm';
import { GuestbookEntries } from './GuestbookEntries';
import { type GuestbookEntry } from '../../../lib/guestbook-simple';

export default function GuestbookContainer() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch entries on mount
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const res = await fetch('/api/guestbook');
      if (res.ok) {
        const data = await res.json();
        setEntries(data);
      }
    } catch (error) {
      console.error('Failed to fetch entries:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="guestbook" className="guestbook">
      <div className="container">
        <h2 className="guestbook-header">Sign the Guestbook</h2>

        <div className="guestbook-intro">
          Leave your mark! Share your thoughts about marketing technology, surf forecasting, or just say hello.
        </div>

        <GuestbookForm />

        <GuestbookEntries entries={entries} isLoading={isLoading} />

        <div className="guestbook-footer">
          Powered by Supabase • Latest 10 entries shown
        </div>
      </div>
    </section>
  );
}

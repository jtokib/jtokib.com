"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>500 - Server-side error occurred</h1>
      <p>{error?.message || 'An unexpected error has occurred.'}</p>
      <button onClick={() => reset()} style={{ marginTop: '1rem' }}>
        Try again
      </button>
    </div>
  );
}

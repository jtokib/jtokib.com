'use client';

import { useState, useEffect, useCallback } from 'react';
import type { 
  UseGuestbookReturn, 
  GuestbookService, 
  GuestbookEntry, 
  CreateGuestbookEntryInput 
} from '../types';

export function useGuestbook(service: GuestbookService): UseGuestbookReturn {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Load entries on mount
  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await service.getEntries();
      
      if (result.success) {
        setEntries(result.data || []);
      } else {
        setError(result.error?.userMessage || result.error?.message || 'Failed to load entries');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [service]);

  const createEntry = useCallback(async (input: CreateGuestbookEntryInput) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await service.createEntry(input);
      
      if (result.success) {
        // Optimistically add the new entry to the list
        setEntries(prev => [result.data!, ...prev.slice(0, 9)]);
        setSuccess('🌟 Thanks for signing my guestbook! 🌟');
      } else {
        setError(result.error?.userMessage || result.error?.message || 'Failed to save your message');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [service]);

  const clearMessages = useCallback(() => {
    setError(null);
    setSuccess(null);
  }, []);

  return {
    entries,
    isLoading,
    error,
    success,
    createEntry,
    clearMessages,
  };
}
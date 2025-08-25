'use client';

// Client-side exports for React components and hooks
export type {
  GuestbookEntry,
  CreateGuestbookEntryInput,
  UseGuestbookReturn,
  UseFormValidationReturn,
  FormValidationState,
} from './types';

export { useGuestbook } from './hooks/use-guestbook';
export { useFormValidation, useInputCounts } from './hooks/use-form-validation';
export { GuestbookValidationService } from './validation/validation-service';
export { DEFAULT_GUESTBOOK_CONFIG } from './config/guestbook-config';

// Client-side service that uses API calls instead of direct Supabase
import type { GuestbookService, GuestbookEntry, CreateGuestbookEntryInput, ServiceResult } from './types';

class APIGuestbookService implements GuestbookService {
  async getEntries(): Promise<ServiceResult<GuestbookEntry[]>> {
    try {
      const response = await fetch('/api/guestbook');
      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: { code: 'API_ERROR', message: data.error || 'Failed to fetch entries', userMessage: data.error || 'Failed to fetch entries' } };
      }
      
      return { success: true, data };
    } catch (error) {
      return { success: false, error: { code: 'NETWORK_ERROR', message: 'Network error occurred', userMessage: 'Network error occurred' } };
    }
  }

  async createEntry(input: CreateGuestbookEntryInput): Promise<ServiceResult<GuestbookEntry>> {
    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: { code: 'API_ERROR', message: data.error || 'Failed to create entry', userMessage: data.error || 'Failed to create entry' } };
      }
      
      return { success: true, data };
    } catch (error) {
      return { success: false, error: { code: 'NETWORK_ERROR', message: 'Network error occurred', userMessage: 'Network error occurred' } };
    }
  }
}

export function createClientGuestbookService(): GuestbookService {
  return new APIGuestbookService();
}
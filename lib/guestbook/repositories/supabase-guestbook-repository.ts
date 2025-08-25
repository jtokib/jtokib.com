import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { 
  GuestbookRepository, 
  GuestbookEntry, 
  CreateGuestbookEntryInput, 
  ServiceResult,
  ServiceError 
} from '../types';

export class SupabaseGuestbookRepository implements GuestbookRepository {
  private supabase: SupabaseClient;

  constructor(supabaseUrl: string, supabaseKey: string) {
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async findMany(limit = 10): Promise<ServiceResult<GuestbookEntry[]>> {
    try {
      const { data, error } = await this.supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) {
        return {
          success: false,
          error: this.mapSupabaseError('FETCH_FAILED', error.message, 'Failed to load guestbook entries'),
        };
      }

      return {
        success: true,
        data: data || [],
      };
    } catch (error) {
      return {
        success: false,
        error: this.mapUnknownError('FETCH_ERROR', error, 'An error occurred while loading entries'),
      };
    }
  }

  async create(input: CreateGuestbookEntryInput): Promise<ServiceResult<GuestbookEntry>> {
    try {
      const { data, error } = await this.supabase
        .from('guestbook')
        .insert([{
          name: input.name,
          message: input.message,
        }])
        .select()
        .single();

      if (error) {
        return {
          success: false,
          error: this.mapSupabaseError('CREATE_FAILED', error.message, 'Failed to save your message'),
        };
      }

      if (!data) {
        return {
          success: false,
          error: {
            code: 'NO_DATA_RETURNED',
            message: 'No data returned from database',
            userMessage: 'Failed to save your message',
          },
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: this.mapUnknownError('CREATE_ERROR', error, 'An error occurred while saving your message'),
      };
    }
  }

  async healthCheck(): Promise<boolean> {
    try {
      const { error } = await this.supabase
        .from('guestbook')
        .select('id')
        .limit(1);

      return !error;
    } catch {
      return false;
    }
  }

  private mapSupabaseError(code: string, message: string, userMessage: string): ServiceError {
    return {
      code,
      message: `Supabase error: ${message}`,
      userMessage,
      context: {
        source: 'supabase',
        timestamp: new Date().toISOString(),
      },
    };
  }

  private mapUnknownError(code: string, error: unknown, userMessage: string): ServiceError {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return {
      code,
      message: `Repository error: ${message}`,
      userMessage,
      context: {
        source: 'repository',
        timestamp: new Date().toISOString(),
        originalError: error,
      },
    };
  }
}

// Factory function for creating repository instances
export const createSupabaseGuestbookRepository = (
  supabaseUrl: string, 
  supabaseKey: string
): GuestbookRepository => {
  return new SupabaseGuestbookRepository(supabaseUrl, supabaseKey);
};
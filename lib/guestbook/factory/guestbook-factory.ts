import { GuestbookValidationService } from '../validation/validation-service';
import { createSupabaseGuestbookRepository } from '../repositories/supabase-guestbook-repository';
import { createGuestbookService } from '../services/guestbook-service';
import { createGuestbookConfig } from '../config/guestbook-config';
import type { GuestbookService, GuestbookConfig } from '../types';

interface GuestbookDependencies {
  supabaseUrl: string;
  supabaseKey: string;
  config?: Partial<GuestbookConfig>;
}

let serviceInstance: GuestbookService | null = null;

export function createGuestbookServiceWithDefaults(
  dependencies: GuestbookDependencies
): GuestbookService {
  // Use singleton pattern for better performance
  if (serviceInstance) {
    return serviceInstance;
  }

  const config = createGuestbookConfig(dependencies.config);
  const validator = new GuestbookValidationService(config);
  const repository = createSupabaseGuestbookRepository(
    dependencies.supabaseUrl,
    dependencies.supabaseKey
  );
  
  serviceInstance = createGuestbookService(repository, validator, config);
  return serviceInstance;
}

export function createGuestbookServiceForEnvironment(): GuestbookService {
  const supabaseUrl = 'https://uqtbhutphcsfuhglpndt.supabase.co';
  const supabaseKey = process.env.SUPABASE_KEY!;

  if (!supabaseKey) {
    throw new Error('SUPABASE_KEY environment variable is required');
  }

  return createGuestbookServiceWithDefaults({
    supabaseUrl,
    supabaseKey,
  });
}

// For testing purposes
export function resetServiceInstance(): void {
  serviceInstance = null;
}

export function createGuestbookServiceForTesting(
  mockRepository?: any,
  mockValidator?: any,
  mockConfig?: GuestbookConfig
): GuestbookService {
  const config = mockConfig || createGuestbookConfig();
  const validator = mockValidator || new GuestbookValidationService(config);
  const repository = mockRepository || createSupabaseGuestbookRepository('test-url', 'test-key');
  
  return createGuestbookService(repository, validator, config);
}
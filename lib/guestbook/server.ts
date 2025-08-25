// Server-only exports for API routes and server components
export type {
  GuestbookEntry,
  CreateGuestbookEntryInput,
  GuestbookService,
  ServiceResult,
  ValidationResult,
} from './types';

export { 
  createGuestbookServiceForEnvironment,
  createGuestbookServiceWithDefaults,
  createGuestbookServiceForTesting,
} from './factory/guestbook-factory';
export { GuestbookValidationService } from './validation/validation-service';
export { DEFAULT_GUESTBOOK_CONFIG } from './config/guestbook-config';
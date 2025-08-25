// Public API exports
export type {
  GuestbookEntry,
  CreateGuestbookEntryInput,
  GuestbookService,
  UseGuestbookReturn,
  UseFormValidationReturn,
  ServiceResult,
  ValidationResult,
  FormValidationState,
} from './types';

export { useGuestbook } from './hooks/use-guestbook';
export { useFormValidation, useInputCounts } from './hooks/use-form-validation';
export { 
  createGuestbookServiceForEnvironment,
  createGuestbookServiceWithDefaults,
  createGuestbookServiceForTesting,
} from './factory/guestbook-factory';
export { GuestbookValidationService } from './validation/validation-service';
export { DEFAULT_GUESTBOOK_CONFIG } from './config/guestbook-config';
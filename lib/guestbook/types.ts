// Core domain types
export interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

export interface CreateGuestbookEntryInput {
  name: string;
  message: string;
}

export interface GuestbookEntryWithTimestamp extends GuestbookEntry {
  formatted_date?: string;
}

// Service interfaces
export interface GuestbookRepository {
  findMany(limit?: number): Promise<ServiceResult<GuestbookEntry[]>>;
  create(input: CreateGuestbookEntryInput): Promise<ServiceResult<GuestbookEntry>>;
  healthCheck(): Promise<boolean>;
}

export interface GuestbookService {
  getEntries(limit?: number): Promise<ServiceResult<GuestbookEntry[]>>;
  createEntry(input: CreateGuestbookEntryInput): Promise<ServiceResult<GuestbookEntry>>;
}

// Validation types
export interface ValidationRule<T> {
  validate: (value: T) => ValidationResult;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface FormValidationState {
  name: ValidationResult;
  message: ValidationResult;
  isFormValid: boolean;
}

// Service result pattern
export interface ServiceResult<T> {
  success: boolean;
  data?: T;
  error?: ServiceError;
}

export interface ServiceError {
  code: string;
  message: string;
  userMessage: string;
  context?: Record<string, unknown>;
}

// React hook types
export interface UseGuestbookReturn {
  entries: GuestbookEntry[];
  isLoading: boolean;
  error: string | null;
  success: string | null;
  createEntry: (input: CreateGuestbookEntryInput) => Promise<void>;
  clearMessages: () => void;
}

export interface UseFormValidationReturn {
  validation: FormValidationState;
  validateField: (field: keyof CreateGuestbookEntryInput, value: string) => void;
  validateForm: (input: CreateGuestbookEntryInput) => boolean;
  clearValidation: () => void;
}

// Configuration types
export interface GuestbookConfig {
  validation: {
    name: {
      maxLength: number;
      minLength: number;
    };
    message: {
      maxLength: number;
      minLength: number;
      maxWords: number;
    };
  };
  display: {
    maxEntries: number;
  };
  rateLimit: {
    maxRequests: number;
    windowMs: number;
  };
}
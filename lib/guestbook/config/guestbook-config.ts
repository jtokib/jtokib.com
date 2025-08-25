import type { GuestbookConfig } from '../types';

export const DEFAULT_GUESTBOOK_CONFIG: GuestbookConfig = {
  validation: {
    name: {
      maxLength: 50,
      minLength: 1,
    },
    message: {
      maxLength: 1000,
      minLength: 1,
      maxWords: 250,
    },
  },
  display: {
    maxEntries: 10,
  },
  rateLimit: {
    maxRequests: 5,
    windowMs: 60 * 1000, // 1 minute
  },
};

export const createGuestbookConfig = (overrides?: Partial<GuestbookConfig>): GuestbookConfig => {
  return {
    ...DEFAULT_GUESTBOOK_CONFIG,
    ...overrides,
    validation: {
      ...DEFAULT_GUESTBOOK_CONFIG.validation,
      ...overrides?.validation,
      name: {
        ...DEFAULT_GUESTBOOK_CONFIG.validation.name,
        ...overrides?.validation?.name,
      },
      message: {
        ...DEFAULT_GUESTBOOK_CONFIG.validation.message,
        ...overrides?.validation?.message,
      },
    },
  };
};
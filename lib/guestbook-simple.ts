import validator from 'validator';

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export interface CreateEntryInput {
  name: string;
  message: string;
}

/**
 * Validates a guestbook entry input
 * @returns Error message if invalid, null if valid
 */
export function validateEntry(input: CreateEntryInput): string | null {
  if (!input.name?.trim()) {
    return 'Name is required';
  }

  if (input.name.length > 50) {
    return 'Name must be 50 characters or less';
  }

  if (!input.message?.trim()) {
    return 'Message is required';
  }

  const words = input.message.trim().split(/\s+/).length;
  if (words > 250) {
    return 'Message must be 250 words or less';
  }

  if (input.message.length > 1000) {
    return 'Message must be 1000 characters or less';
  }

  return null; // Valid
}

/**
 * Sanitizes user input to prevent XSS attacks
 */
export function sanitizeEntry(input: CreateEntryInput): CreateEntryInput {
  return {
    name: validator.escape(input.name.trim().substring(0, 50)),
    message: validator.escape(input.message.trim().substring(0, 1000))
  };
}

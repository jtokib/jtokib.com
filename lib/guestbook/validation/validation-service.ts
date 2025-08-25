import validator from 'validator';
import type { 
  CreateGuestbookEntryInput, 
  ValidationResult, 
  FormValidationState, 
  GuestbookConfig 
} from '../types';

export class GuestbookValidationService {
  constructor(private config: GuestbookConfig) {}

  validateName(name: string): ValidationResult {
    const errors: string[] = [];
    const trimmedName = name?.trim() || '';

    if (!trimmedName) {
      errors.push('Name is required');
    }

    if (trimmedName.length < this.config.validation.name.minLength) {
      errors.push(`Name must be at least ${this.config.validation.name.minLength} character(s)`);
    }

    if (trimmedName.length > this.config.validation.name.maxLength) {
      errors.push(`Name must be ${this.config.validation.name.maxLength} characters or less`);
    }

    // XSS prevention - check if escaped content differs significantly from original
    const escaped = validator.escape(trimmedName);
    if (escaped !== trimmedName && escaped.length < trimmedName.length * 0.5) {
      errors.push('Name contains invalid characters');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  validateMessage(message: string): ValidationResult {
    const errors: string[] = [];
    const trimmedMessage = message?.trim() || '';

    if (!trimmedMessage) {
      errors.push('Message is required');
    }

    if (trimmedMessage.length < this.config.validation.message.minLength) {
      errors.push(`Message must be at least ${this.config.validation.message.minLength} character(s)`);
    }

    if (trimmedMessage.length > this.config.validation.message.maxLength) {
      errors.push(`Message must be ${this.config.validation.message.maxLength} characters or less`);
    }

    // Word count validation
    const wordCount = trimmedMessage.split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount > this.config.validation.message.maxWords) {
      errors.push(`Message must be ${this.config.validation.message.maxWords} words or less`);
    }

    // XSS prevention
    const escaped = validator.escape(trimmedMessage);
    if (escaped !== trimmedMessage && escaped.length < trimmedMessage.length * 0.5) {
      errors.push('Message contains invalid characters');
    }

    // Basic spam detection
    if (this.isLikelySpam(trimmedMessage)) {
      errors.push('Message appears to be spam');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  validateCreateInput(input: CreateGuestbookEntryInput): FormValidationState {
    const nameValidation = this.validateName(input.name);
    const messageValidation = this.validateMessage(input.message);

    return {
      name: nameValidation,
      message: messageValidation,
      isFormValid: nameValidation.isValid && messageValidation.isValid,
    };
  }

  sanitizeInput(input: CreateGuestbookEntryInput): CreateGuestbookEntryInput {
    return {
      name: validator.escape(input.name?.trim() || ''),
      message: validator.escape(input.message?.trim() || ''),
    };
  }

  private isLikelySpam(message: string): boolean {
    const spamIndicators = [
      /https?:\/\/[^\s]+\.[^\s]+/gi, // URLs
      /\b(buy now|click here|limited time|act now|free money|earn \$|make money fast)\b/gi,
      /(.)\1{10,}/g, // Repeated characters
      /[A-Z]{20,}/g, // Too many capitals
    ];

    let spamScore = 0;
    for (const pattern of spamIndicators) {
      if (pattern.test(message)) {
        spamScore++;
      }
    }

    return spamScore >= 2; // Threshold for spam detection
  }

  getCharacterCount(text: string): number {
    return text?.length || 0;
  }

  getWordCount(text: string): number {
    return text?.trim().split(/\s+/).filter(word => word.length > 0).length || 0;
  }
}
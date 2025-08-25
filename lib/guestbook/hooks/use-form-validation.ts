'use client';

import { useState, useCallback, useMemo } from 'react';
import type { 
  UseFormValidationReturn, 
  CreateGuestbookEntryInput, 
  FormValidationState 
} from '../types';
import type { GuestbookValidationService } from '../validation/validation-service';

export function useFormValidation(validator: GuestbookValidationService): UseFormValidationReturn {
  const [validation, setValidation] = useState<FormValidationState>({
    name: { isValid: true, errors: [] },
    message: { isValid: true, errors: [] },
    isFormValid: false,
  });

  const validateField = useCallback((field: keyof CreateGuestbookEntryInput, value: string) => {
    let fieldValidation;
    
    if (field === 'name') {
      fieldValidation = validator.validateName(value);
    } else if (field === 'message') {
      fieldValidation = validator.validateMessage(value);
    } else {
      return;
    }

    setValidation(prev => {
      const updated = {
        ...prev,
        [field]: fieldValidation,
      };
      
      updated.isFormValid = updated.name.isValid && updated.message.isValid;
      return updated;
    });
  }, [validator]);

  const validateForm = useCallback((input: CreateGuestbookEntryInput): boolean => {
    const formValidation = validator.validateCreateInput(input);
    setValidation(formValidation);
    return formValidation.isFormValid;
  }, [validator]);

  const clearValidation = useCallback(() => {
    setValidation({
      name: { isValid: true, errors: [] },
      message: { isValid: true, errors: [] },
      isFormValid: false,
    });
  }, []);

  return {
    validation,
    validateField,
    validateForm,
    clearValidation,
  };
}

export function useInputCounts(validator: GuestbookValidationService) {
  const getCharacterCount = useCallback((text: string) => {
    return validator.getCharacterCount(text);
  }, [validator]);

  const getWordCount = useCallback((text: string) => {
    return validator.getWordCount(text);
  }, [validator]);

  const getCharacterLimit = useMemo(() => {
    return {
      name: validator['config'].validation.name.maxLength,
      message: validator['config'].validation.message.maxLength,
    };
  }, [validator]);

  const getWordLimit = useMemo(() => {
    return validator['config'].validation.message.maxWords;
  }, [validator]);

  return {
    getCharacterCount,
    getWordCount,
    getCharacterLimit,
    getWordLimit,
  };
}
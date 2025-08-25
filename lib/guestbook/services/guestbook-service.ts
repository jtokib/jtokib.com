import type { 
  GuestbookService, 
  GuestbookRepository, 
  GuestbookEntry, 
  CreateGuestbookEntryInput, 
  ServiceResult,
  GuestbookConfig 
} from '../types';
import type { GuestbookValidationService } from '../validation/validation-service';

export class GuestbookServiceImpl implements GuestbookService {
  constructor(
    private repository: GuestbookRepository,
    private validator: GuestbookValidationService,
    private config: GuestbookConfig
  ) {}

  async getEntries(limit?: number): Promise<ServiceResult<GuestbookEntry[]>> {
    const actualLimit = limit || this.config.display.maxEntries;
    
    try {
      const result = await this.repository.findMany(actualLimit);
      
      if (!result.success) {
        return result;
      }

      // Add formatted dates for display
      const entriesWithFormattedDates = result.data!.map(entry => ({
        ...entry,
        formatted_date: this.formatDate(entry.created_at),
      }));

      return {
        success: true,
        data: entriesWithFormattedDates,
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'SERVICE_ERROR',
          message: `Service error: ${error instanceof Error ? error.message : 'Unknown error'}`,
          userMessage: 'Unable to load guestbook entries at this time',
          context: {
            source: 'service',
            operation: 'getEntries',
            timestamp: new Date().toISOString(),
          },
        },
      };
    }
  }

  async createEntry(input: CreateGuestbookEntryInput): Promise<ServiceResult<GuestbookEntry>> {
    try {
      // Validate input
      const validation = this.validator.validateCreateInput(input);
      if (!validation.isFormValid) {
        const allErrors = [...validation.name.errors, ...validation.message.errors];
        return {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: `Validation failed: ${allErrors.join(', ')}`,
            userMessage: allErrors[0] || 'Invalid input',
            context: {
              source: 'service',
              operation: 'createEntry',
              validationErrors: allErrors,
            },
          },
        };
      }

      // Sanitize input
      const sanitizedInput = this.validator.sanitizeInput(input);

      // Create entry
      const result = await this.repository.create(sanitizedInput);
      
      if (!result.success) {
        return result;
      }

      return {
        success: true,
        data: result.data!,
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'SERVICE_ERROR',
          message: `Service error: ${error instanceof Error ? error.message : 'Unknown error'}`,
          userMessage: 'Unable to save your message at this time',
          context: {
            source: 'service',
            operation: 'createEntry',
            timestamp: new Date().toISOString(),
          },
        },
      };
    }
  }

  private formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return 'Invalid date';
    }
  }
}

// Factory function for creating service instances
export const createGuestbookService = (
  repository: GuestbookRepository,
  validator: GuestbookValidationService,
  config: GuestbookConfig
): GuestbookService => {
  return new GuestbookServiceImpl(repository, validator, config);
};
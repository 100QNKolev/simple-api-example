import { BaseError } from '../models/BaseError';

export class ValidationError extends BaseError {
    constructor(message: string) {
        super(message, 400);
    }
} 
import { BaseError } from '../models/BaseError';

export class NotFoundError extends BaseError {
    constructor(message: string) {
        super(message, 404);
    }
} 
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from '../errors/ValidationError';

export const validateItemNameMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    if (!name) {
        throw new ValidationError('Name is required');
    }
    next();
}; 
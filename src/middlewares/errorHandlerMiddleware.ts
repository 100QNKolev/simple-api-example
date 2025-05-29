import { Request, Response, NextFunction } from 'express';
import { BaseError } from '../models/BaseError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  // Log the error for debugging purposes
  console.error('Error:', err.message);

  // Handle known error types
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  // Generic error handling for other types of errors
  res.status(500).json({
    status: 'error',
    message: 'An unexpected error occurred',
  });
}; 
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from '../errors/ValidationError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  // Log the error for debugging purposes
  console.error('Error:', err.message);

  // Handle ValidationError differently
  if (err instanceof ValidationError) {
    return res.status(400).json({
      status: 'error',
      message: err.message
    });
  }

  // Generic error handling for other types of errors
  res.status(500).json({
    status: 'error',
    message: 'An unexpected error occurred'
  });
}; 
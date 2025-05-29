export class BaseError extends Error {
    public readonly statusCode: number;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.name = this.constructor.name;
      this.statusCode = statusCode;
  
      // Necessary for instanceof checks to work correctly
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }
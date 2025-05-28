// Validate the name of the item
export const validateItemName = (name: string): string => { 
    if (!name || typeof name !== 'string') { // If the name is not a string or is not provided, throw an error
    throw new Error('Name is required and must be a string');
  }

  if (name.length < 2) { // If the name is less than 2 characters, throw an error
    throw new Error('Name must be at least 2 characters long');
  }

  if (name.length > 50) { // If the name is more than 50 characters, throw an error
    throw new Error('Name must not exceed 50 characters');
  }

  return name.trim(); // Return the name
}
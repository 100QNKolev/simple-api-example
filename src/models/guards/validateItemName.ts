import { Item } from "../../types/item";

export const validateItemName = (name: string): string => {
if (!name || typeof name !== 'string') {
    throw new Error('Name is required and must be a string');
  }

  if (name.length < 2) {
    throw new Error('Name must be at least 2 characters long');
  }

  if (name.length > 50) {
    throw new Error('Name must not exceed 50 characters');
  }

  return name.trim();
}
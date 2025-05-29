import store from "../models/Store";

import { Item } from "../types/item";
import { validateItemName } from "../validators/validateItemName";
import { ValidationError } from "../errors/ValidationError";

// Get all items from the store
export const getItems = (): Item[] => {
    return store.getAllItems(); // Get all items from the store
};

// Get item by ID
export const getItemById = (id: string): Item => {
    const item = store.getItemById(id); // Get item by ID from the store
    if (!item) {
        throw new ValidationError(`Item with id ${id} not found`); // Throw an error if the item is not found
    }
    return item;
};

// Create a new item and add it to the store
export const createItem = (name: string): Item => {
    const validatedName = validateItemName(name); // Validate the name of the item
    return store.addItem(validatedName); // Add the item to the store
};

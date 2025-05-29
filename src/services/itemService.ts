import store from "../models/Store";
import { Item } from "../types/item";
import { validateItemName } from "../validators/validateItemName";
import { NotFoundError } from "../errors/NotFoundError";

// Get all items from the store
export const getItems = (): Item[] => {
    return store.getAllItems(); // Get all items from the store
};

// Get item by ID
export const getItemById = (id: string): Item => {
    const item = store.getItemById(id); // Get item by ID from the store
    if (!item) {
        throw new NotFoundError(`Item with the specified id not found`); // Throw an error if the item is not found
    }
    return item;
};

// Update item by ID
export const updateItem = (id: string, name: string): Item => {
    const validatedName = validateItemName(name); // Validate the new name
    const updatedItem = store.updateItem(id, validatedName);
    if (!updatedItem) {
        throw new NotFoundError(`Item with the specified id not found`); // Throw an error if the item is not found
    }
    return updatedItem;
};

// Delete item by ID
export const deleteItem = (id: string): void => {
    const isDeleted = store.deleteItem(id);
    if (!isDeleted) {
        throw new NotFoundError(`Item with the specified id not found`); // Throw an error if the item is not found
    }
};

// Create a new item and add it to the store
export const createItem = (name: string): Item => {
    const validatedName = validateItemName(name); // Validate the name of the item
    return store.addItem(validatedName); // Add the item to the store
};

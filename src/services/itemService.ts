import store from "../models/Store";

import { Item } from "../types/item";
import { validateItemName } from "../validators/validateItemName";

// Get all items from the store
export const getItems = (): Item[] => {
    return store.getAllItems(); // Get all items from the store
};

// Create a new item and add it to the store
export const createItem = (name: string): Item => {
    const validatedName = validateItemName(name); // Validate the name of the item
    return store.addItem(validatedName); // Add the item to the store
};

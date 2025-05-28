import store from "../models/Store";

import { Item } from "../types/item";
import { validateItemName } from "../models/guards/validateItemName";

// Get all items from the store
export const getItems = (): Item[] => {
    try {
        return store.getAllItems(); // Get all items from the store
    } catch (error) {
        throw new Error('Failed to fetch items'); // Throw an error if the items cannot be fetched
    }
};

// Create a new item and add it to the store
export const createItem = (name: string): Item => {
    try {
        const validatedName = validateItemName(name); // Validate the name of the item
        return store.addItem(validatedName); // Add the item to the store
    } catch (error) {
        throw new Error('Failed to create item'); // Throw an error if the item cannot be created
    }
};

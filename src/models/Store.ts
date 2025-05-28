import { Item } from '../types/item';
import { validateItemName } from './guards/validateItemName';

export class Store {
  private items: Item[] = [];

  public getAllItems(): Item[] {
    return [...this.items]; // Return a copy to prevent direct mutation
  }

  public addItem(name: string): Item {
    const validatedName = validateItemName(name); // Validate the name of the item

    const newItem: Item = { // Create a new item with the validated name and a random id
      id: crypto.randomUUID(),
      name: validatedName
    };

    this.items.push(newItem); // Add the new item to the items array
    return { ...newItem }; // Return a copy to prevent direct mutation
  }
}

// Singleton instance
const store = new Store();
export default store; 
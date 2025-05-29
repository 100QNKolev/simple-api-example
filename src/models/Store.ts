import { Item } from '../types/item';

export class Store {
  private items: Item[] = [];

  public getAllItems(): Item[] {
    return [...this.items]; // Return a copy to prevent direct mutation
  }

  public getItemById(id: string): Item | undefined {
    return this.items.find(item => item.id === id); // Return the item if it exists, otherwise return undefined
  }

  public updateItem(id: string, name: string): Item | undefined {
    const itemIndex = this.items.findIndex(item => item.id === id); // Find the index of the item
    if (itemIndex === -1) { 
      return undefined; // Return undefined if the item is not found
    }

    const updatedItem = { ...this.items[itemIndex], name }; // Create a new item with the updated name
    this.items[itemIndex] = updatedItem; // Update the item in the items array
    return { ...updatedItem }; // Return a copy to prevent direct mutation
  }

  public addItem(name: string): Item {
    const newItem: Item = { // Create a new item with the validated name and a random id
      id: crypto.randomUUID(),
      name: name
    };

    this.items.push(newItem); // Add the new item to the items array
    return { ...newItem }; // Return a copy to prevent direct mutation
  }
}

// Singleton instance
const store = new Store();
export default store; 
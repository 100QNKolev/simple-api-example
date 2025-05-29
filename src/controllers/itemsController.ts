import express from "express";
import { Request, Response } from "express";
import { getItems, createItem, getItemById, updateItem, deleteItem } from '../services/itemService';
import { validateItemNameMiddleware } from '../middlewares/validateItemNameMiddleware';

const router = express.Router();

// Get all items from the store
router.get("/items", async (req: Request, res: Response) => {
    const items = getItems(); // Get all items from the store
    res.status(200).json(items);
});

// Get item by ID
router.get("/items/:id", async (req: Request, res: Response) => {
    const item = getItemById(req.params.id); // Get item by ID
    res.status(200).json(item);
});

// Update item by ID
router.put("/items/:id", validateItemNameMiddleware, async (req: Request, res: Response) => {
    const { name } = req.body;
    const updatedItem = updateItem(req.params.id, name); // Update item with new name
    res.status(200).json(updatedItem);
});

// Delete item by ID
router.delete("/items/:id", async (req: Request, res: Response) => {
    deleteItem(req.params.id); // Delete item by ID
    res.status(204).send(); // Return 204 No Content on successful deletion
});

// Create a new item and add it to the store
router.post("/items", validateItemNameMiddleware, async (req: Request, res: Response) => {
    const { name } = req.body;
    const item = createItem(name); // Create a new item and add it to the store
    res.status(201).json(item);
});

export default router;
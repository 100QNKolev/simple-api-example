import express from "express";
import { Request, Response } from "express";
import { getItems, createItem } from '../services/itemService';
import { ValidationError } from '../errors/ValidationError';

const router = express.Router();

// Get all items from the store
router.get("/items", async (req: Request, res: Response) => {
    try {
        const items = getItems(); // Get all items from the store
        res.status(200).json(items); // Return the items
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch items" }); // Return an error if the items cannot be fetched
    }
});

// Create a new item and add it to the store
router.post("/items", async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const item = createItem(name); // Create a new item and add it to the store
        res.status(201).json(item); // Return the item
    } catch (error: unknown) {
        if (error instanceof ValidationError) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Failed to create item" }); // Generic error for other cases
        }
    }
});

export default router;
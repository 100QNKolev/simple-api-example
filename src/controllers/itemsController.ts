import express from "express";
import { Request, Response } from "express";
import { getItems, createItem } from '../services/itemService';

const router = express.Router();

// Get all items from the store
router.get("/items", async (req: Request, res: Response) => {
    const items = getItems(); // Get all items from the store
    res.status(200).json(items); // Return the items
});

// Create a new item and add it to the store
router.post("/items", async (req: Request, res: Response) => {
    const { name } = req.body;
    const item = createItem(name); // Create a new item and add it to the store
    res.status(201).json(item); // Return the item
});

export default router;
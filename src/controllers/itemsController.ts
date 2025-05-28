import express from "express";
import { Request, Response } from "express";
import { getItems, createItem } from '../services/itemService';

const router = express.Router();

router.get("/items", async (req: Request, res: Response) => {
    try {
        const items = getItems();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch items" });
    }
});

router.post("/items", async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const item = createItem(name);
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ error: "Failed to create item" });
    }
});

export default router;
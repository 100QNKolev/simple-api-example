import express from 'express';
import itemsRouter from './controllers/itemsController';

const router = express.Router(); // Create a new router

router.use(express.json()); // Parse JSON request bodies
router.use('/', itemsRouter); // Use the items router

export default router;

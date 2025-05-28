import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the API' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 
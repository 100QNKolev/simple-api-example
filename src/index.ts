import 'express-async-errors';
import express from 'express';
import router from './router';
import { errorHandler } from './middlewares/errorHandlerMiddleware';

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Routes
app.use('/', router);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 
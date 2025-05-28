import express from 'express';
import router from './router';

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Routes
app.use('/', router);


// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 
import express from 'express';
import dotenv from 'dotenv';
import { logger } from './middleware/logger';
import { authMiddleware } from './middleware/auth';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes';
import { prisma } from './db';

dotenv.config();

const requiredEnv = ['PORT', 'DB_URL', 'JWT_SECRET'];
for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const app = express();

app.use(express.json());
app.use(logger);
app.use(authMiddleware);

app.use('/', routes);

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
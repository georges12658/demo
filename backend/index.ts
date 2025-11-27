import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import logger from './middleware/logger';
import auth from './middleware/auth';
import errorHandler from './middleware/errorHandler';
import healthRouter from './routes';
import userRouter from './routes/user';
import authRouter from './routes/auth';

dotenv.config();

const requiredEnv = ['PORT', 'DB_URL', 'JWT_SECRET'];
requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

const prisma = new PrismaClient();

const app = express();

app.use(express.json());
app.use(logger);
app.use('/health', healthRouter);
app.use('/users', auth, userRouter);
app.use('/auth', authRouter);

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});

export default app;
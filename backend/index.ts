import express from 'express';
import dotenvSafe from 'dotenv-safe';
import corsMiddleware from './middleware/cors';
import { JWT_SECRET } from './config';
import rateLimiter from './middleware/rateLimiter';
import authRouter from './routes/auth';
import userRouter from './routes/user';
import errorHandler from './middleware/errorHandler';

dotenvSafe.config();

const app = express();

app.use(corsMiddleware);
app.use(rateLimiter);
app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

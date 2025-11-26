/**
 * Express application entry point.
 *
 * @module server
 */
import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { logger } from './middleware/logger';
import router from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(logger);
app.use(router);

/**
 * Global error handler.
 */
app.use(
  (
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
);

const PORT = parseInt(process.env.PORT ?? '4000', 10);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;

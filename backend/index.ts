import express from 'express';
import morgan from 'morgan';
import dotenvSafe from 'dotenv-safe';
import cors from 'cors';
import { limiter } from './middleware/rateLimiter';
import router from './routes';
import errorHandler from './middleware/errorHandler';

dotenvSafe.config({ example: '.env.example' });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(limiter);
app.use(morgan('dev'));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api', router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

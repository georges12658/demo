import { Router } from 'express';
import { prisma } from '../db';
import userRouter from './user';
import authRouter from './auth';

const router = Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

router.use('/users', userRouter);
router.use('/auth', authRouter);

export default router;
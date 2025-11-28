import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../db';
import { verifyToken } from '../middleware/auth';

const router = Router();



router.get('/', async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany({ select: { id: true, email: true, name: true, createdAt: true } });
  res.json(users);
});

router.get('/:id', async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({ where: { id: Number(req.params.id) }, select: { id: true, email: true, name: true, createdAt: true } });
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

router.post('/', async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, password: hashed, name } });
  res.status(201).json({ id: user.id, email: user.email, name: user.name });
});

router.put('/:id', async (req: Request, res: Response) => {
  const { email, name } = req.body;
  const user = await prisma.user.update({ where: { id: Number(req.params.id) }, data: { email, name } });
  res.json({ id: user.id, email: user.email, name: user.name });
});

router.delete('/:id', async (req: Request, res: Response) => {
  await prisma.user.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
});

export default router;

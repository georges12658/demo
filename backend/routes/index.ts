import express, { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// GET /users
router.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// POST /users
router.post('/users', async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, name } = req.body;
  try {
    const user = await prisma.user.create({
      data: { email, password, name },
    });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

// GET /users/:id
router.get('/users/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// PUT /users/:id
router.put('/users/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { email, password, name } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { email, password, name },
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// DELETE /users/:id
router.delete('/users/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

export default router;
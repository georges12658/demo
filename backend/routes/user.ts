import { Router } from 'express';
import { prisma } from '../db';

const userRouter = Router();

router.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

router.post('/', async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return res.status(409).json({ error: 'User already exists' });
  }
  const user = await prisma.user.create({
    data: { email, password, name },
  });
  res.status(201).json(user);
});

router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { email, password, name } = req.body;
  const data: any = {};
  if (email !== undefined) data.email = email;
  if (password !== undefined) data.password = password;
  if (name !== undefined) data.name = name;
  try {
    const user = await prisma.user.update({
      where: { id },
      data,
    });
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
});
  const id = parseInt(req.params.id, 10);
  const { email, password, name } = req.body;
  const data: any = {};
  if (email !== undefined) data.email = email;
  if (password !== undefined) data.password = password;
  if (name !== undefined) data.name = name;
  const user = await prisma.user.update({
    where: { id },
    data,
  });
  res.json(user);
});

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    await prisma.user.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
});
  const id = parseInt(req.params.id, 10);
  try {
    await prisma.user.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
});

export default userRouter;

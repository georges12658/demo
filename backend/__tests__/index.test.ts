import request from 'supertest';
import express from 'express';
import router from '../routes/index';
import { PrismaClient } from '@prisma/client';
import errorHandler from '../middleware/errorHandler';

const app = express();
app.use(express.json());
app.use(router);
app.use(errorHandler);

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.$connect();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('User CRUD API', () => {
  let userId: number;

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ email: 'test@example.com', password: 'password', name: 'Test User' });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    userId = res.body.id;
  });

  it('should get all users', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get a user by id', async () => {
    const res = await request(app).get(`/users/${userId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('email', 'test@example.com');
  });

  it('should update a user', async () => {
    const res = await request(app)
      .put(`/users/${userId}`)
      .send({ name: 'Updated Name' });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name', 'Updated Name');
  });

  it('should delete a user', async () => {
    const res = await request(app).delete(`/users/${userId}`);
    expect(res.status).toBe(204);
  });
});
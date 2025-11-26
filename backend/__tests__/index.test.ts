/**
 * Tests for the Express application.
 *
 * @module tests
 */
import request from 'supertest';
import app from '../index';

describe('GET /', () => {
  it('should return 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});

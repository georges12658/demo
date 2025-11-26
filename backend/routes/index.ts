/**
 * API routes for the application.
 *
 * @module routes
 */
import { Router, Request, Response } from 'express';
import { authenticate, AuthenticatedRequest } from '../middleware/auth';

const router = Router();

/**
 * Public route that returns a greeting message.
 */
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from API' });
});

/**
 * Protected route that requires authentication.
 */
router.get(
  '/protected',
  authenticate,
  (req: AuthenticatedRequest, res: Response) => {
    res.json({ message: 'Protected content', user: req.user });
  }
);

export default router;

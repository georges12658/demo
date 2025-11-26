/**
 * Authentication middleware that verifies JWT tokens.
 *
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - Express next function.
 * @returns {void}
 */
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

/**
 * Extends the Express Request interface to include the authenticated user.
 */
export interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Missing Authorization header' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Missing token' });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    console.error('JWT_SECRET is not defined');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    const payload = jwt.verify(token, secret);
    (req as AuthenticatedRequest).user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  const status = (err as any).status || 500;
  res.status(status).json({
    error: (err as any).message || 'Internal Server Error',
  });
};

export default errorHandler;
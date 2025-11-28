import dotenvSafe from 'dotenv-safe';

dotenvSafe.config();

export const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET not defined');
}

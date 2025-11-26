/**
 * Prisma client instance for database access.
 *
 * @module db
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;

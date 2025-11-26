/**
 * Morgan logger middleware for Express.
 *
 * @module logger
 */
import morgan from 'morgan';

export const logger = morgan('combined');

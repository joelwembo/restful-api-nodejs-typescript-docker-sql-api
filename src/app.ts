import express, { NextFunction, Request, Response } from 'express';
import config from 'config';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { AppDataSource } from './utils/data-source';
import AppError from './utils/appError';
import authRouter from './routes/auth.routes';
import userRouter from './routes/user.routes';
import postRouter from './routes/post.routes';
import tagsRouter from './routes/tag.routes';
import validateEnv from './utils/validateEnv';

/**
 * @Author : Joel Otepa Wembo
 * @Description : Node JS and PostgreSQL Backend Rest API Server
 * @File : The Program will be entry point of our entire sofware, using express to routes to our controllers
 */

require('dotenv').config();

AppDataSource.initialize()
  .then(async () => {
    validateEnv();

    const app = express();

    app.use(express.json({ limit: '10kb' }));
    if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

    app.use(cookieParser());

    app.use(
      cors({
        origin: config.get<string>('origin'),
        credentials: true,
      })
    );

    // Rest API Routes
    app.use('/api/auth', authRouter);
    app.use('/api/users', userRouter);
    app.use('/api/tasks', postRouter);
    app.use('/api/tags', tagsRouter);

    app.all('*', (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(404, `Route ${req.originalUrl} not found`));
    });

    app.use(
      (error: AppError, req: Request, res: Response, next: NextFunction) => {
        error.status = error.status || 'error';
        error.statusCode = error.statusCode || 500;

        res.status(error.statusCode).json({
          status: error.status,
          message: error.message,
        });
      }
    );
    
    // Running the express server
    const port = config.get<number>('port');
    app.listen(port);

    console.log(`NodeJS Server started on Port: ${port}`);
  })
  .catch((error) => console.log(error));
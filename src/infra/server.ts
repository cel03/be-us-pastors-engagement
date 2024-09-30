// src/server.ts

import express, { type Request, type Response } from 'express';
import cors from 'cors';
import { HttpCode } from '../core/constants';
import { v1Router } from './api/v1';

import db from '../models';

interface ServerOptions {
  port: number;
  apiPrefix: string;
}

export class Server {
  private readonly app = express();
  private readonly port: number;

  constructor(options: ServerOptions) {
    const { port } = options;
    this.port = port;
  }

  async start(): Promise<void> {
    //* Middlewares
    this.app.use(express.json()); // parse json in request body (allow raw)
    this.app.use(express.urlencoded({ extended: true })); // allow x-www-form-urlencoded

    this.app.use(cors());

    this.app.use('/api/v1', v1Router);

    // Test rest api
    this.app.get('/', (_req: Request, res: Response) => {
      return res.status(HttpCode.OK).send({
        message: `Welcome to Initial API! \n Endpoints available at http://localhost:${this.port}/`
      });
    });

    try {
      // TODO: Remove alter: true in production
      await db.sequelize.sync({ alter: true });
      console.log('Database & tables created!');

      this.app.listen(this.port, () => {
        console.log(`Server running on port ${this.port}...`);
      });
    } catch (error) {
      console.error('Error syncing database:', error);
    }
  }
}

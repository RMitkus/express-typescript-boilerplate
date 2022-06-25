import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
config();

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Express server with TypeScript');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

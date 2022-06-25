import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
config();

const app: Application = express();

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

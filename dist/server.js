'use strict';
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const dotenv_1 = require('dotenv');
const express_1 = __importDefault(require('express'));
const client_1 = require('@prisma/client');
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
// use `prisma` in your application to read and write data in your DB
console.log(prisma);
app.get('/', (req, res, next) => {
  res.send('Express server with TypeScript');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

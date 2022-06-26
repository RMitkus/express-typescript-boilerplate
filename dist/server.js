'use strict';
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt (value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled (value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected (value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step (result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const dotenv_1 = require('dotenv');
const express_1 = __importDefault(require('express'));
const client_1 = require('@prisma/client');
const prisma = new client_1.PrismaClient();
// use `prisma` in your application to read and write data in your DB
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function * () {
  const user = yield prisma.user.create({
    data: {
      name: 'Alice',
      email: 'asdsad@asad.as',
      password: 'asdasd'
    }
  });
  res.json(user);
}));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
config();
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



const app: Application = express();

type User = {
  id: string;
  name: string | null;
  lastName: string | null;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type User {
    id: String!
    name: String
    lastName: String
    email: String!
    password: String!
    createdAt: String
    updatedAt: String
  }

  type Query {
    users: [User]
    user(email: String): User
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  users: async (): Promise<User[]> => {
    return await prisma.user.findMany();
  },
  user: async (args: {email: string}): Promise<User | null>=> {
    return await prisma.user.findUnique({
      where: {
        email: args.email
      }
    })
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`
  Server is listening on port http://localhost:${PORT} \n
  graphiql running on http://localhost:${PORT}/graphql
  `);
});


import { PrismaClient } from '@prisma/client';
import { graphqlHTTP } from  'express-graphql';
import {schemas, resolvers}  from './Schemas';
const prisma = new PrismaClient();
// Construct a schema, using GraphQL schema language

export const graphqlClient = graphqlHTTP(() : any=> {
    return {
    schema: schemas,
    rootValue: resolvers,
    graphiql: true,
  }});
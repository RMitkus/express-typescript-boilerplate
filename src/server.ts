import { config } from 'dotenv';
config();
import express, { Application, NextFunction, Request, Response } from 'express';
import { graphqlClient } from './graphql';

const app: Application = express();

app.use('/graphql', graphqlClient);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`
  Server is listening on port http://localhost:${PORT} \n
  graphiql running on http://localhost:${PORT}/graphql
  `);
});

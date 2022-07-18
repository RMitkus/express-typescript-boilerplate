
import { graphqlHTTP } from 'express-graphql';
import { schemas, resolvers } from './Schemas';

export const graphqlClient = graphqlHTTP(() => {
	return {
		schema: schemas,
		rootValue: resolvers,
		graphiql: true
	};
});

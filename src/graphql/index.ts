
import { graphqlHTTP } from 'express-graphql'

import {
	schemas,
	resolvers
} from './Schemas'

const graphqlClient = graphqlHTTP({
	schema: schemas,
	rootValue: resolvers,
	graphiql: true
})

export default graphqlClient

import { userQueries, userTypes, userResolvers } from './User/UserSchema';
import { locationQueries, locationTypes, locationResolvers } from './Location/LocationSchema';
import { buildSchema } from 'graphql';

const typesResources = [userTypes, locationTypes];
const queriesResources = [userQueries, locationQueries];
const resolverResources = [userResolvers, locationResolvers];

const types = typesResources.join('\n');
const joinedQueries = queriesResources.join('\n');

const queries = `
    type Query {
        ${joinedQueries}
    }
`;
export const schemas = buildSchema(`
    ${types}
    ${queries}
`);

export const resolvers = resolverResources.reduce((acc, curr) => {
	return {
		...acc,
		...curr
	};
}, {});

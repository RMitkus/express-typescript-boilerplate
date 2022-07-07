import { userQueries, userTypes, userResolvers } from "./UserSchema";
import { postQueries, postTypes, postResolvers } from "./PostsSchema";
import { buildSchema } from  'graphql';

const typesResources = [userTypes, postTypes];
const queriesResources = [userQueries, postQueries];
const resolverResources = [userResolvers, postResolvers];

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
    }
}, {});
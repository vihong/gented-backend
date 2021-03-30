import { GraphQLServer } from 'graphql-yoga';
import Mutation from './resolvers/Mutation';
import Query from './resolvers/Query';
import db from './db';

// Creates the GraphQL Yoga Server using a whole bunch of other app under the hood.

export function createServer() {
	return new GraphQLServer({
		typeDefs: 'src/schema.graphql',
		resolvers: {
			Mutation,
			Query
		},
		resolverValidationOptions: {
			requireResolversForResolveType: false
		},
		context: (req) => ({ ...req, db })
	});
}

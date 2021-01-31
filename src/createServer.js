const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation'); // j'importe mes Mutation resolvers
const Query = require('./resolvers/Query'); // j'importe mes Query resolvers
const db = require('./db'); // YogaServer intéragit avec la db

// Creates the GraphQL Yoga Server using a whole bunch of other app under the hood.

function createServer() {
	return new GraphQLServer({
		typeDefs                  : 'src/schema.graphql',
		resolvers                 : {
			Mutation,
			Query
		},
		resolverValidationOptions : {
			requireResolversForResolveType : false
		},
		context                   : (req) => ({ ...req, db })
	});
}

module.exports = createServer;

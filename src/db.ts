import { Prisma } from 'prisma-binding';

const db: Prisma = new Prisma({
	typeDefs: 'src/generated/prisma.graphql',
	endpoint: process.env.PRISMA_ENDPOINT, // tells what URL gives access to the database
	secret: process.env.PRISMA_SECRET, // password granting access to the database
	debug: false
});

export default db;

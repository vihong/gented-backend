require('dotenv').config({ path: 'variables.env' });
import { createServer } from './createServer';
const db = require('./db');

const server = createServer();

server.start(
	{
		cors: {
			credentials: true,
			origin: process.env.FRONTEND_URL
		}
	},
	(details: any) => {
		console.log(`Server is now running on port http://localhost:${details.port}`);
	}
);

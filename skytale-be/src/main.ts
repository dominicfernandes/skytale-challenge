import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';
import { HttpStatus } from './common/http-status.enum';
import { connectToDB } from './db.connection';
import { requestidMiddleware } from './middlewares/requestid.miidelware';

// configure env values
dotenv.config();

const { PORT } = process.env;
const app = express();

// connect to db
connectToDB();

app.use(express.json());

// add requestId to request context
app.use(requestidMiddleware);

// use all REST endpoints
app.use('', routes);

// for all invalid routes
app.all('*', (req: Request, res: Response): void => {
	res.status(HttpStatus.NOT_FOUND).send('<h2>Invalid Endpoint</h2>');
});

app.listen(PORT, () => {
	console.log(`App started on port ${PORT}`);
});

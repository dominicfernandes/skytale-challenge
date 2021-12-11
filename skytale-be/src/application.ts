import express, { Request, Response, Application } from 'express';
import { routes } from './routes';
import { HttpStatus } from './common/http-status.enum';
import { connectToDB } from './db.connection';
import { requestidMiddleware } from './middlewares/requestid.middleware';

export class App {
	private static app = express();
	public static async createApp(): Promise<Application> {
		// connect to db
		await connectToDB();

		this.app.use(express.json());

		// add requestId to request context
		this.app.use(requestidMiddleware);

		// use all REST endpoints
		this.app.use('', routes);

		// for all invalid routes
		this.app.all('*', (req: Request, res: Response): void => {
			res.status(HttpStatus.NOT_FOUND).send('<h2>Invalid Endpoint</h2>');
		});
		return this.app;
	}
}

import { App } from './application';
import dotenv from 'dotenv';

// configure env values
dotenv.config();

const { PORT } = process.env;
App.createApp()
	.then((app) => {
		app.listen(PORT, () => {
			console.log(`App started on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});

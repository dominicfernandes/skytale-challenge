import mongoose from 'mongoose';

/**
 * @description function to connect to mongoDB
 */
export function connectToDB() {
	mongoose
		.connect(process.env.MONGODB_URL || '')
		.then((_) => {
			console.log('connected to MongoDB');
		})
		.catch((error) => {
			console.log('failed to connect to mongoDB');
			console.log(error);
		});
}

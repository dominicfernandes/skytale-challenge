import mongoose from 'mongoose';

/**
 * @description function to connect to mongoDB
 */
export async function connectToDB() {
	try {
		await mongoose.connect(process.env.MONGODB_URL || '');
		console.log('connected to MongoDB');
	} catch (error) {
		console.log('failed to connect to mongoDB');
		console.log(error);
	}
}

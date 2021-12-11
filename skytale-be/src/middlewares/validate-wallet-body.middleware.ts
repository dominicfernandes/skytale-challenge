import { NextFunction, Request, Response } from 'express';
import { HttpErrorResponses } from '../common/http-error.class';
import { HttpStatus } from '../common/http-status.enum';
import { saveWalletSchema } from '../schema/save-wallet.dto';

/**
 * @description middleware to validate save wallet request body
 * @param req
 * @param res
 * @param next
 * @returns
 */
export async function validateWalletBodyMiddleware(req: Request, res: Response, next: NextFunction) {
	const walletData = req.body;
	const validation = saveWalletSchema.validate(walletData);

	if (validation.error) {
		const errorMessages = validation.error?.details.map((e) => e.message);
		console.log(errorMessages);

		return res
			.status(HttpStatus.BAD_REQUEST)
			.send(HttpErrorResponses.badRequestError(errorMessages));
	}

	return next();
}

import { NextFunction, Response } from 'express';
import { CustomRequest } from '../common/custom-request';
import { HttpErrorResponses } from '../common/http-error.class';
import { HttpStatus } from '../common/http-status.enum';
import { WalletService } from '../services';

/**
 * @description middleware to check authorization header for usertoken
 * an attach the wallet to the request context
 * @param req
 * @param res
 * @param next
 * @returns
 */
export async function validateUserToken(req: CustomRequest, res: Response, next: NextFunction) {
	const walletService = new WalletService();
	try {
		const userToken = req.headers.usertoken;

		if (!userToken) {
			return res.status(HttpStatus.UNAUTHORIZED).send(HttpErrorResponses.unauthorizedError());
		}

		const wallet = await walletService.getWalletByUserToken(userToken as string);

		req.wallet = wallet;

		return wallet
			? next()
			: res.status(HttpStatus.UNAUTHORIZED).send(HttpErrorResponses.unauthorizedError());
	} catch (error) {
		console.log(error);
		return res
			.status(HttpStatus.INTERNAL_SERVER_ERROR)
			.send(HttpErrorResponses.internalServerError());
	}
}

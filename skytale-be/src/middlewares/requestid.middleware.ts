import { NextFunction, Response } from 'express';
import { Guid } from 'guid-typescript';
import { CustomRequest } from '../common/custom-request';

/**
 * @description adds a requestId to request context
 * @param req
 * @param res
 * @param next
 * @returns
 */
export async function requestidMiddleware(req: CustomRequest, res: Response, next: NextFunction) {
	req.requestId = Guid.create().toString();
	next();
}

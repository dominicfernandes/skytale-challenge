import { Response } from 'express';
import { CustomRequest } from '../../common/custom-request';
import { requestidMiddleware } from '../../middlewares/requestid.middleware';

describe('requestidMiddleware', () => {
	let mockRequest: Partial<CustomRequest>;
	let mockResponse: Partial<Response>;
	const next = jest.fn();

	beforeEach(() => {
		mockRequest = {};

		mockResponse = {
			status: jest.fn().mockReturnValue({
				send: jest.fn(),
			}),
		};

		requestidMiddleware(mockRequest as CustomRequest, mockResponse as Response, next);
	});

	it('should add requestid to request context', () => {
		expect(mockRequest.requestId).toBeDefined();
	});
});

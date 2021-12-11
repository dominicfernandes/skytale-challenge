import { HttpStatus } from './http-status.enum';

export class HttpErrorResponses {
	public static internalServerError(): IErrorResponse {
		return {
			message: 'Internal Server Error',
			status: HttpStatus.INTERNAL_SERVER_ERROR,
		} as IErrorResponse;
	}

	public static badRequestError(message: string | unknown): IErrorResponse {
		return {
			message,
			status: HttpStatus.BAD_REQUEST,
		} as IErrorResponse;
	}

	public static unauthorizedError(): IErrorResponse {
		return {
			message: 'Unauthorized',
			status: HttpStatus.UNAUTHORIZED,
		} as IErrorResponse;
	}
}

export interface IErrorResponse {
	message: string | unknown;
	status: HttpStatus;
}

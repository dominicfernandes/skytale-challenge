import { Request } from 'express';
import { IWallet } from '../models/wallet.model';

export interface CustomRequest extends Request {
	wallet?: IWallet | null;
	requestId?: string;
}

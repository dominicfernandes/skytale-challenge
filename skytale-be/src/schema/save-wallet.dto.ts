import joi from 'joi';
import { allowedChains } from '../common/allowed-chains';

export const saveWalletSchema = joi.object({
	chain: joi
		.string()
		.required()
		.valid(...allowedChains),
	address: joi
		.string()
		.required()
		.regex(/^0x[a-fA-F0-9]{40}$/),
});

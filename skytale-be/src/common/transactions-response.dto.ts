import { ITransaction } from './skytale-response.interface';

export interface ITransactionResponseDto {
	transactions: ITransaction[];
	size: number;
	page: number;
	hasNext: boolean;
}

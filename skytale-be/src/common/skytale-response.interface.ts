export interface ISkyTaleResponse {
	address: string;
	chainName: string;
	totalFiatValue: IFiatValue;
	balances: IBalance[];
	transactions: ITransaction[];
}

export interface IFiatValue {
	rate: number;
	currency: string;
	value: number;
	value24h: number;
	percent24h: number;
}

export interface IBalance {
	coin: ICoin;
	amount: number;
	fiatValue: IFiatValue;
}
export interface ICoin {
	symbol: string;
	reliability: 1;
}

export interface ITransaction {
	hash: string;
	from: string;
	to: string;
	value: string;
	type: string;
}

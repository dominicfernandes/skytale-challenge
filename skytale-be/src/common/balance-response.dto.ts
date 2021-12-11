export interface IBalanceResponse {
	[key: string]: ICoinBalanceData;
}

export interface ICoinBalanceData {
	amount: number;
	rate: number;
	value: string;
}

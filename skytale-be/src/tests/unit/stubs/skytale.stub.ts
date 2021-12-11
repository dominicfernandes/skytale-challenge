import { transactionStub } from './transactions.stub';
import { walletStub } from './wallet.stub';

export const skytaleStub = () => ({
	address: '0x5b3ce67ebc795fe7e709815bc49d4300898e1b7b',
	chainName: 'ethereum',
	totalFiatValue: {
		rate: 0,
		currency: 'EUR',
		value: 20364.4,
		value24h: 20046.62,
		percent24h: 1.56,
	},
	balances: [
		{
			coin: {
				symbol: 'ETH',
				reliability: 1,
			},
			amount: 5.0008,
			fiatValue: {
				rate: 3590.9805,
				value: 17957.77,
				currency: 'EUR',
				value24h: 17693.4,
				percent24h: 1.47,
			},
		},
		{
			coin: {
				symbol: 'UNI',
				reliability: 1,
			},
			amount: 100,
			fiatValue: {
				rate: 13.975808,
				value: 1397.58,
				currency: 'EUR',
				value24h: 1364.69,
				percent24h: 2.35,
			},
		},
		{
			coin: {
				symbol: 'AAVE',
				reliability: 1,
			},
			amount: 5.285,
			fiatValue: {
				rate: 156.92061,
				value: 829.33,
				currency: 'EUR',
				value24h: 812.56,
				percent24h: 2.02,
			},
		},
		{
			coin: {
				symbol: 'MKR',
				reliability: 1,
			},
			amount: 0.04556,
			fiatValue: {
				rate: 2152.7336,
				value: 98.08,
				currency: 'EUR',
				value24h: 96.16,
				percent24h: 1.96,
			},
		},
		{
			coin: {
				symbol: 'KNC',
				reliability: 1,
			},
			amount: 48.0611,
			fiatValue: {
				rate: 1.2090667,
				value: 58.11,
				currency: 'EUR',
				value24h: 56.64,
				percent24h: 2.53,
			},
		},
		{
			coin: {
				symbol: 'DAI',
				reliability: 1,
			},
			amount: 26.51676,
			fiatValue: {
				rate: 0.8874559,
				value: 23.53,
				currency: 'EUR',
				value24h: 23.17,
				percent24h: 1.53,
			},
		},
		{
			coin: {
				symbol: 'ZORT',
				reliability: 1,
			},
			amount: 0,
			fiatValue: {
				rate: 0.0035194778,
				value: 0,
				currency: 'EUR',
				value24h: 0,
				percent24h: 0,
			},
		},
		{
			coin: {
				symbol: 'STT',
				reliability: 0,
			},
			amount: 8.88889,
			fiatValue: {
				rate: 0.00011100763,
				value: 0,
				currency: 'EUR',
				value24h: 0,
				percent24h: 0,
			},
		},
		{
			coin: {
				symbol: 'MNE',
				reliability: 0.5,
			},
			amount: 32000,
			fiatValue: {
				rate: 0,
				value: 0,
				currency: 'EUR',
				value24h: 0,
				percent24h: 0,
			},
		},
	],
	transactions: transactionStub().transactions,
});

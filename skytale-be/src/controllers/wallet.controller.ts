import { Response } from 'express';
import { Guid } from 'guid-typescript';
import { IBalanceResponse, ICoinBalanceData } from '../common/balance-response.dto';
import { HttpErrorResponses, IErrorResponse } from '../common/http-error.class';
import { HttpStatus } from '../common/http-status.enum';
import { IBalance, ITransaction } from '../common/skytale-response.interface';
import { SkytaleService, WalletService } from '../services';
import { SaveWalletResponse } from '../common/save-wallet-response.dto';
import { CustomRequest } from '../common/custom-request';

export class WalletController {
	constructor(
		private readonly walletService: WalletService,
		private readonly skytaleService: SkytaleService
	) {}

	/**
	 * @description method to save user wallet 
	 * Method:POST Endpoint: /wallets
	 * @param req 
	 * @param res 
	 * @returns {Promise<Response<SaveWalletResponse|IErrorResponse>>}
	 */
	public async saveUserWallet(req: CustomRequest, res: Response): Promise<Response<SaveWalletResponse|IErrorResponse>> {
		const requestId = req.requestId;

		try {
			const walletData = req.body;
			const userToken = Guid.create().toString();

			console.log(`/wallets -- ${requestId}\n${JSON.stringify(walletData)}`);

			const wallet = await this.walletService.saveWalletAddress(
				walletData.chain,
				walletData.address,
				userToken
			);

			console.log(`wallet created -- ${requestId}\n${JSON.stringify(wallet)}`);

			// construct response
			const response = {
				address: wallet.address,
				chain: wallet.chain,
				userToken: wallet.userToken,
			} as SaveWalletResponse;

			console.log(`request completed -- ${requestId}`);

			return res.status(HttpStatus.CREATED).send(response);
		} catch (error) {
			this.logError(error as Error,requestId || '');
			return res
				.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.send(HttpErrorResponses.internalServerError());
		}
	}

	/**
	 * @description methods to get transactions done from user's wallet
	 * Method: GET Endpoint: /transactions
	 * Filter options: type, page
	 * @param req 
	 * @param res 
	 * @returns {Promise<Response<ITransaction[]|IErrorResponse>>}
	 */
	public async getTransactions(req: CustomRequest, res: Response): Promise<Response<ITransaction[]|IErrorResponse>> {
		const pageSize = 10; // 10 transactions per request
		const { type, page } = req.query; // filters
		let transactions: ITransaction[] = [];
		const requestId = req.requestId;

		try {
			const userWallet = req.wallet;	// wallet attached in validate user token middleware

			console.log(`/transactions -- ${requestId} \n${JSON.stringify(userWallet)}`);
			console.log(`/transactions -- type:${type}, page:${page} \n${JSON.stringify(userWallet)}`);

			if(userWallet){
				const walletData = await this.skytaleService.getUserWalletDetails(userWallet?.chain, userWallet?.address);
				transactions = walletData.transactions;
			}
		
			// filter transactions by type
			if (type) {
				transactions = transactions.filter((transaction) => transaction.type === type);
			}
			console.log(`transactions -- ${requestId} \n${JSON.stringify(transactions)}`);

			// paginate transactions
			if (page) {
				const offset = parseInt(page.toString()) * pageSize;
				transactions = transactions.slice(offset, offset + 10);
			} else {
				transactions = transactions.slice(0, 10);
			}
			
			console.log(`request completed -- ${requestId}`);

			return res.status(HttpStatus.SUCCESS).send(transactions);
		} catch (error) {
			this.logError(error as Error,requestId || '');
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(HttpErrorResponses.internalServerError());
		}
	}

	/**
	 * @description methods to get user's wallet balances
	 * Method: GET Endpoint: /balance
	 * @param req 
	 * @param res 
	 * @returns {Promise<Response<IBalanceResponse>|IErrorResponse>}
	 */
	public async getBalances(req: CustomRequest, res: Response): Promise<Response<IBalanceResponse>|IErrorResponse> {
		const requestId = req.requestId;

		try {
			let balances:IBalanceResponse[]=[];
			const userWallet = req.wallet;	// wallet attached in validate user token middleware
			console.log(`/balance -- ${requestId} \n${JSON.stringify(userWallet)}`);

			if(userWallet){
				const walletData = await this.skytaleService.getUserWalletDetails(userWallet?.chain, userWallet?.address);
				balances = this.constructBalancesResponse(walletData.balances);
			}

			return res.status(HttpStatus.SUCCESS).send(balances);
		} catch (error) {
			this.logError(error as Error,requestId || '');
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Internal Server Error');
		}
	}

	/**
	 * @description formats skydate data as per native api requirements
	 * @param balances - raw balance data from skytale api
	 * @returns {IBalanceResponse[]}
	 */
	private constructBalancesResponse(balances: IBalance[]): IBalanceResponse[] {
		const response: IBalanceResponse[] = [];

		for (const balance of balances) {
			const coinBalance = Object({});
			const symbol = balance.coin.symbol;
			const amount = balance.amount;
			const { rate, value, currency } = balance.fiatValue;

			coinBalance[symbol] = {
				amount,
				rate,
				value: `${value}${currency}`,
			} as ICoinBalanceData;

			response.push(coinBalance);
		}

		return response;
	}

	private logError(error:Error,requestId:string):void{
		console.log(`${error.name} -- ${requestId}\n${error.message}\n${error.stack}`);
	}
}

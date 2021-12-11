import { IWallet, Wallet } from '../models/wallet.model';

/**
 * Service to interact with with the Wallet of the user in DB
 */
export class WalletService {
	/**
	 *
	 * @param chain - name of blockchain on which the wallet resides
	 * @param address - address of the wallet
	 * @returns {Promise<IWallet>}
	 */
	public async saveWalletAddress(chain: string, address: string, userToken:string): Promise<IWallet> {
		const wallet = await Wallet.create({ address, chain,userToken });
		return wallet;
	}

	/**
	 * @description get the wallet details of user corresponsding to to userToken
	 * @param userToken - token passed to user when wallet was created
	 * @returns {Promise<IWallet | null>}
	 */
	public async getWalletByUserToken(userToken:string): Promise<IWallet | null> {
		const wallet = await Wallet.findOne({userToken});
		return wallet;
	}
}

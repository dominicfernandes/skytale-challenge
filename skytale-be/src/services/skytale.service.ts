import axios from 'axios';
import { ISkyTaleResponse } from '../common/skytale-response.interface';

/**
 * Service to interact with Skytale REST API to feetch details about user's wallet
 */
export class SkytaleService {
	/**
	 * @description gets all details associated with user's wallet
	 * @param chain - name of the block chain on which the wallet exists
	 * @param address - address of the wallet
	 * @returns {Promise<ISkyTaleResponse>} - response from skytale server
	 */
	public async getUserWalletDetails(chain: string,address: string ): Promise<ISkyTaleResponse> {
		const response = await axios.get<ISkyTaleResponse>(`${this.getSkytalebaseUrl()}/chain/${chain}/wallet/${address}`);
		return response.data;
	}

	/**
	 * @description gets the baseurl of the skytale api
	 * @returns {string}
	 */
	private getSkytalebaseUrl(): string {
		return `${process.env.SKYTALE_BASEURL}/api/1`;
	}
}

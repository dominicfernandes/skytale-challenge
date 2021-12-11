import axios from 'axios';
import { SkytaleService } from '../../services';
import { skytaleStub } from './stubs/skytale.stub';
import { walletStub } from './stubs/wallet.stub';

jest.mock('axios');

describe('SkytaleService', () => {
	let service: SkytaleService;

	beforeEach(() => {
		service = new SkytaleService();
		axios.get = jest
			.fn()
			.mockImplementationOnce(() => Promise.resolve({ data: skytaleStub() }));
	});

	it('should fetch data from skytale API', async () => {
		const data = await service.getUserWalletDetails(walletStub().chain, walletStub().address);

		expect(data).toEqual(skytaleStub());
	});
});

import { IWallet, Wallet } from '../../models/wallet.model';
import { WalletService } from '../../services';
import { walletStub } from './stubs/wallet.stub';

describe('WalletService', () => {
	let service: WalletService;

	beforeEach(async () => {
		service = new WalletService();

		Wallet.create = jest.fn().mockResolvedValue(walletStub());
		Wallet.findOne = jest.fn().mockResolvedValue(walletStub());
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('saveWalletAddress', () => {
		let wallet: IWallet;

		beforeEach(async () => {
			wallet = await service.saveWalletAddress(
				walletStub().chain,
				walletStub().address,
				walletStub().userToken
			);
		});

		it('should save and return user wallet', () => {
			expect(wallet).toEqual(walletStub());
		});

		it('should call create method on Wallet model', () => {
			expect(Wallet.create).toHaveBeenCalled();
		});
	});

	describe('getWalletByUserToken', () => {
		let wallet: IWallet;

		beforeEach(async () => {
			wallet = (await service.getWalletByUserToken(walletStub().userToken)) as IWallet;
		});

		it('should save and return user wallet', () => {
			expect(wallet).toEqual(walletStub());
		});

		it('should call create method on Wallet model', () => {
			expect(Wallet.findOne).toHaveBeenCalled();
		});
	});
});

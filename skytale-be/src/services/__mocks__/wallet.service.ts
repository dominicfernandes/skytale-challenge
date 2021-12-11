import { walletStub } from '../../tests/unit/stubs/wallet.stub';

export const WalletService = jest.fn().mockReturnValue({
	saveWalletAddress: jest.fn().mockResolvedValue(walletStub()),
	getWalletByUserToken: jest.fn().mockResolvedValue(walletStub()),
});

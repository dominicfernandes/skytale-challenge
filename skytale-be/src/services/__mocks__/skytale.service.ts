import { skytaleStub } from '../../tests/unit/stubs/skytale.stub';

export const SkytaleService = jest.fn().mockReturnValue({
	getUserWalletDetails: jest.fn().mockResolvedValue(skytaleStub()),
	getSkytalebaseUrl: jest.fn(),
});

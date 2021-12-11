import { Response } from 'express';
import { Guid } from 'guid-typescript';
import { CustomRequest } from '../../common/custom-request';
import { WalletController } from '../../controllers/wallet.controller';
import { SkytaleService, WalletService } from '../../services';
import { balanceStub } from './stubs/balance.stub';
import { transactionStub } from './stubs/transactions.stub';
import { walletStub } from './stubs/wallet.stub';

jest.mock('../../services/skytale.service');
jest.mock('../../services/wallet.service');

describe('WalletController', () => {
	let walletController: WalletController;
	let walletService: WalletService;
	let skytaleService: SkytaleService;

	beforeEach(() => {
		walletService = new WalletService();
		skytaleService = new SkytaleService();
		walletController = new WalletController(walletService, skytaleService);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('saveUserWallet', () => {
		let mockRequest: Partial<CustomRequest>;
		let mockResponse: Partial<Response>;
		let response = Object({});

		beforeEach(async () => {
			mockRequest = {
				requestId: Guid.create().toString(),
				body: {
					chain: 'ethereum',
					address: '0x5b3ce67ebc795fe7e709815bc49d4300898e1b7b',
				},
			};
			mockResponse = {
				status: jest.fn().mockReturnValue({
					send: jest.fn().mockImplementation((result) => {
						response = result;
					}),
				}),
			};

			await walletController.saveUserWallet(
				mockRequest as CustomRequest,
				mockResponse as Response
			);
		});

		afterEach(() => {
			jest.clearAllMocks();
		});

		it('should match expected response', () => {
			expect(response).toEqual(walletStub());
		});

		it('should call saveWalletAddress from WalletService', () => {
			expect(walletService.saveWalletAddress).toHaveBeenCalled();
		});
	});

	describe('getTransactions', () => {
		let mockRequest: Partial<CustomRequest>;
		let mockResponse: Partial<Response>;
		let response = Object({});

		afterEach(() => {
			jest.clearAllMocks();
		});

		describe('transactions without filter', () => {
			beforeEach(async () => {
				mockRequest = {
					requestId: Guid.create().toString(),
					wallet: walletStub(),
					query: {},
				};

				mockResponse = {
					status: jest.fn().mockReturnValue({
						send: jest.fn().mockImplementation((result) => {
							response = result;
						}),
					}),
				};

				await walletController.getTransactions(
					mockRequest as CustomRequest,
					mockResponse as Response
				);
			});

			it('should match expected response', () => {
				const expectedResponse = {
					transactions: transactionStub().transactions.slice(0, 10),
					page: 0,
					size: 10,
					hasNext: true,
				};
				expect(response).toEqual(expectedResponse);
			});

			it('should call getUserWalletDetails from SkytaleService', () => {
				expect(skytaleService.getUserWalletDetails).toHaveBeenCalledWith(
					walletStub().chain,
					walletStub().address
				);
			});
		});

		describe('transactions with filter', () => {
			beforeEach(async () => {
				mockRequest = {
					requestId: Guid.create().toString(),
					wallet: walletStub(),
					query: {
						type: 'send',
					},
				};

				mockResponse = {
					status: jest.fn().mockReturnValue({
						send: jest.fn().mockImplementation((result) => {
							response = result;
						}),
					}),
				};

				await walletController.getTransactions(
					mockRequest as CustomRequest,
					mockResponse as Response
				);
			});

			it('should match expected response', () => {
				const expectedResponse = {
					transactions: transactionStub()
						.transactions.filter((t) => t.type == 'send')
						.slice(0, 10),
					page: 0,
					size: 10,
					hasNext: true,
				};
				expect(response).toEqual(expectedResponse);
			});

			it('should call getUserWalletDetails from SkytaleService', () => {
				expect(skytaleService.getUserWalletDetails).toHaveBeenCalledWith(
					walletStub().chain,
					walletStub().address
				);
			});
		});
	});

	describe('getBalances', () => {
		let mockRequest: Partial<CustomRequest>;
		let mockResponse: Partial<Response>;
		let response = Object({});

		beforeEach(async () => {
			mockRequest = {
				requestId: Guid.create().toString(),
				wallet: walletStub(),
			};
			mockResponse = {
				status: jest.fn().mockReturnValue({
					send: jest.fn().mockImplementation((result) => {
						response = result;
					}),
				}),
			};

			await walletController.getBalances(
				mockRequest as CustomRequest,
				mockResponse as Response
			);
		});

		it('should match expected response', () => {
			expect(Object(response.keys())).toEqual(Object(balanceStub()).keys());
		});

		it('should call getUserWalletDetails from SkyTaleService', () => {
			expect(skytaleService.getUserWalletDetails).toHaveBeenCalledWith(
				walletStub().chain,
				walletStub().address
			);
		});
	});
});

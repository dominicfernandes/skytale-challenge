import { Application } from 'express';
import supertest from 'supertest';
import { App } from '../../application';
import { validWalletStub } from './stubs/save-wallet.stub';

describe('Integration Test', () => {
	let app: Application;
	let userToken: string;

	beforeAll(async () => {
		app = await App.createApp();
	});

	describe('POST /wallet', () => {
		describe('given Valid chain and address', () => {
			let response: supertest.Response;
			beforeAll(async () => {
				response = await supertest(app).post('/wallet').send(validWalletStub());
				userToken = response.body.userToken;
			});

			it('should return status code of 200', () => {
				expect(response.statusCode).toBe(201);
			});

			it('should have userToken in response body', () => {
				expect(response.body.userToken).toBeDefined();
			});
		});

		describe('given invalid chain and address', () => {
			let response: supertest.Response;

			it('should return status code of 400 when address is not valid hex address', async () => {
				response = await supertest(app)
					.post('/wallet')
					.send({ chain: 'ethereum', address: 'invalid value' });
				expect(response.statusCode).toBe(400);
			});

			it('should return status code of 400 when chain name is invalid', async () => {
				response = await supertest(app).post('/wallet').send({
					chain: 'invalid chain',
					address: '0x5b3ce67ebc795fe7e709815bc49d4300898e1b7b',
				});
				expect(response.statusCode).toBe(400);
			});
		});
	});

	describe('GET /transactions', () => {
		let response: supertest.Response;

		describe('given valid userToken in header', () => {
			beforeAll(async () => {
				response = await supertest(app).get('/transactions').set('userToken', userToken);
			});

			it('should return status code of 200', () => {
				expect(response.statusCode).toBe(200);
			});

			it('should have transactions in response', () => {
				expect(response.body).toHaveProperty('transactions');
			});
		});

		describe('given invalid userToken in header', () => {
			beforeAll(async () => {
				response = await supertest(app)
					.get('/transactions')
					.set('userToken', 'invalid token');
			});

			it('should return status code of 401', () => {
				expect(response.statusCode).toBe(401);
			});
		});

		// TODO: tests for page and type filter
		// but provided addresses do not have transactions hence cannot verify
	});

	describe('GET /balance', () => {
		let response: supertest.Response;

		describe('given valid userToken in header', () => {
			beforeAll(async () => {
				response = await supertest(app).get('/balance').set('userToken', userToken);
			});

			it('should return status code of 200', () => {
				expect(response.statusCode).toBe(200);
			});

			it('should have balances in response', () => {
				expect(response.body).toHaveProperty('balances');
			});
		});

		describe('given invalid userToken in header', () => {
			beforeAll(async () => {
				response = await supertest(app).get('/balance').set('userToken', 'invalid token');
			});

			it('should return status code of 401', () => {
				expect(response.statusCode).toBe(401);
			});
		});
	});
});

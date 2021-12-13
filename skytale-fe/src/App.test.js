import { render, screen } from "@testing-library/react";
import { Router } from "react-router";
import App from './App';
import { Balances, Transactions, WalletDetails } from "./containers";

describe('App Component', () => {
	describe("/ Route", () => {
		it('should Application', () => {
			const { getByTestId } = render(<App />);
			const component = getByTestId('app');
			expect(component).toBeInTheDocument();
		});

		it('should have the header', () => {
			const { getByTestId } = render(<App />);
			const component = getByTestId('header');
			expect(component).toBeInTheDocument();
		});

		it('should have the footer', () => {
			const { getByTestId } = render(<App />);
			const component = getByTestId('footer');
			expect(component).toBeInTheDocument();
		});

		it('should have saveWallet component', () => {
			const { getByTestId } = render(<App />);
			const component = getByTestId('save-wallet-container');
			expect(component).toBeInTheDocument();
		});
	});

	describe("/wallet Route", () => {
		it('should have WalletDetails container', () => {
			const { getByTestId } = render(<Router location="/wallet"><WalletDetails /></Router>)
			const component = getByTestId('wallet-details');
			expect(component).toBeInTheDocument();
		});

		it('should have Transactions container', () => {
			const { getByTestId } = render(<Router location="/wallet"><Transactions /></Router>)
			const component = getByTestId('transactions-container');
			expect(component).toBeInTheDocument();
		});

		it('should have Balances container', () => {
			const { getByTestId } = render(<Router location="/wallet"><Balances /></Router>)
			const component = getByTestId('balances');
			expect(component).toBeInTheDocument();
		});
	})

});
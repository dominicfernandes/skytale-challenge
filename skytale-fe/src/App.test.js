import { render } from "@testing-library/react";
import App from './App';

describe('App Component', () => {
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
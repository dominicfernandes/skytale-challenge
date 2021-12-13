import { render, screen, fireEvent } from "@testing-library/react";
import { SaveWalletForm } from "..";

describe('SaveWallet Component', () => {

	it('should render component', () => {
		const saveWallet = jest.fn();
		render(<SaveWalletForm saveWallet={saveWallet} />);

		const component = screen.getByTestId('save-wallet-form');
		expect(component).toBeInTheDocument();
	});

	it('should have the required input labels', () => {
		const saveWallet = jest.fn();
		const { getByText } = render(<SaveWalletForm saveWallet={saveWallet} />);

		expect(getByText('Chain:')).toBeTruthy();
		expect(getByText('Address:')).toBeTruthy();

	});

	it('should have the required input fields', () => {
		const saveWallet = jest.fn();
		const { container } = render(<SaveWalletForm saveWallet={saveWallet} />);

		expect(container.querySelector('#chain')).toBeTruthy();
		expect(container.querySelector('#address')).toBeTruthy();
	});

	it('should call saveWallet on invalid input', () => {
		const saveWallet = jest.fn();
		const { getByTestId } = render(<SaveWalletForm saveWallet={saveWallet} />);
		const submitBtn = getByTestId('submit-btn');

		fireEvent.click(submitBtn);

		expect(saveWallet).toHaveBeenCalledTimes(0);
	});

	it('should call onClick when submit button is clicked', () => {
		const saveWallet = jest.fn();
		const { getByTestId } = render(<SaveWalletForm saveWallet={saveWallet} />);
		const submitBtn = getByTestId('submit-btn');
		const chainSelect = getByTestId('chain-select');
		const addressInput = getByTestId('input-address');

		fireEvent.change(chainSelect, { target: { value: 'ethereum' } });
		fireEvent.change(addressInput, { target: { value: '0x29d7d1dd5b6f9c864d9db560d72a247c178ae86b' } });
		fireEvent.click(submitBtn);

		expect(saveWallet).toHaveBeenCalled();
	});
});
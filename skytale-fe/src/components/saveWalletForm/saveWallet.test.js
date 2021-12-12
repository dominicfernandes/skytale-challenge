import { render, screen } from "@testing-library/react";
import { SaveWalletForm } from "..";

describe('SaveWallet Component', () => {
	const saveWallet = jest.fn();

	it('should render component', () => {
		render(<SaveWalletForm saveWallet={saveWallet} />);

		const component = screen.getByTestId('save-wallet-form');
		expect(component).toBeInTheDocument();
	});
});
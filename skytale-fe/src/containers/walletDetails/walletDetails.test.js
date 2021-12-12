import { render, screen } from "@testing-library/react";
import { WalletDetails } from "..";

describe('WalletDetails Component', () => {

	it('should render component', () => {
		render(<WalletDetails />);

		const component = screen.getByTestId('wallet-details');
		expect(component).toBeInTheDocument();
	});
});
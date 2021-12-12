import { render, screen } from "@testing-library/react";
import { Transaction } from "..";

describe('Transaction Component', () => {
	const saveWallet = jest.fn();

	it('should render component', () => {
		render(<Transaction saveWallet={saveWallet} />);

		const component = screen.getByTestId('transaction');
		expect(component).toBeInTheDocument();
	});
});
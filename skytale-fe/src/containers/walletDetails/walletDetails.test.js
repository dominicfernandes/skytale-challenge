import { render, screen } from "@testing-library/react";
import { WalletDetails } from "..";

jest.mock("react-router-dom", () => ({
	useNavigate: (path) => jest.fn(path)
}));

describe('WalletDetails Component', () => {
	it('should render component', () => {
		render(<WalletDetails />);
		const component = screen.getByTestId('wallet-details');
		expect(component).toBeInTheDocument();
	});

	it('should have transactions component', () => {
		const { getByTestId } = render(<WalletDetails />);
		const transactionsComponent = getByTestId('transactions-container');
		expect(transactionsComponent).toBeInTheDocument();
	});

	it('should have balances component', () => {
		const { getByTestId } = render(<WalletDetails />);
		const balancesComponent = getByTestId('balances');
		expect(balancesComponent).toBeInTheDocument();
	});
});
import { render, screen } from "@testing-library/react";
import { Transactions } from "..";

jest.mock("react-router-dom", () => ({
	useNavigate: (path) => jest.fn(path)
}));

describe('Transactions Component', () => {
	it('should render component', () => {
		render(<Transactions />);

		const component = screen.getByTestId('transactions-container');
		expect(component).toBeInTheDocument();
	});

	it('should have transactions title', () => {
		const { getByText } = render(<Transactions />);

		const element = getByText('Transactions');
		expect(element).toBeTruthy();
	});
});
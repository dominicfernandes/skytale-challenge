import { render, screen } from "@testing-library/react";
import { Balances } from "..";

describe('Balances Component', () => {

	it('should render component', () => {
		render(<Balances />);

		const component = screen.getByTestId('balances');
		expect(component).toBeInTheDocument();
	});

	it('should have balance title', () => {
		const { getByText } = render(<Balances />);

		const element = getByText('Balances');
		expect(element).toBeTruthy();
	});
});
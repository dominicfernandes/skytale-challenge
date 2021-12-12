import { render, screen } from "@testing-library/react";
import { CoinBalance } from "..";

describe('CoinBalance Component', () => {
	it('should render component', () => {
		render(<CoinBalance name="name" amount={300} value={100} rate={300} />);

		const component = screen.getByTestId('coin-balance');
		expect(component).toBeInTheDocument();
	});
});
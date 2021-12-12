import { render, screen } from "@testing-library/react";
import { Footer } from "..";

describe('Footer Component', () => {

	it('should render component', () => {
		render(<Footer />);

		const component = screen.getByTestId('footer');
		expect(component).toBeInTheDocument();
	});
});
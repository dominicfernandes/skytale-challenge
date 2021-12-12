import { render, screen } from "@testing-library/react";
import { FilterPanel } from "..";

describe('FilterPanel Component', () => {
	const setFilter = jest.fn();

	it('should render component', () => {
		render(<FilterPanel setFilterType={setFilter} />);

		const component = screen.getByTestId('filter-panel');
		expect(component).toBeInTheDocument();
	});
});
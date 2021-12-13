import { render, screen, fireEvent } from "@testing-library/react";
import { FilterPanel } from "..";

describe('FilterPanel Component', () => {
	const setFilter = jest.fn();

	it('should render component', () => {
		render(<FilterPanel setFilterType={setFilter} />);

		const component = screen.getByTestId('filter-panel');
		expect(component).toBeInTheDocument();

	});

	it('should call onChange when an option is selected', async () => {
		const setFilter = jest.fn().mockImplementation();
		const { queryByTestId } = render(<FilterPanel setFilterType={setFilter} />);
		const selectElement = queryByTestId('filter-select');

		expect(selectElement).toBeDefined();

		fireEvent.change(selectElement);
		expect(setFilter).toHaveBeenCalled();
	});
});
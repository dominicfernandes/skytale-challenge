import { render, screen } from "@testing-library/react";
import { SaveWallet } from "..";

jest.mock("react-router-dom", () => ({
	useNavigate: (path) => path
}));

describe('SaveWallet Component', () => {

	it('should render component', () => {
		render(<SaveWallet />);

		const component = screen.getByTestId('save-wallet-container');
		expect(component).toBeInTheDocument();
	});
});
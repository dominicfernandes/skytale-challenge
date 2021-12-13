import { render, screen } from "@testing-library/react";
import { Header } from "..";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useLocation: () => ({
		pathname: "localhost:3000/"
	}),
	useNavigate: (path) => path
}));

describe('Header Component', () => {

	it('should render component', () => {
		render(<Header />);
		const component = screen.getByTestId('header');
		expect(component).toBeInTheDocument();
	});

	it('should have skyWallet in header', () => {
		const { getByText } = render(<Header />);
		const header = getByText("SkyWallet");
		expect(header).toBeTruthy();
	});
});
import { render, screen, fireEvent } from "@testing-library/react";
import { SaveWallet } from "..";
import axios from "axios";

jest.mock("react-router-dom", () => ({
	useNavigate: (path) => jest.fn(path)
}));

jest.mock("axios");

describe('SaveWallet Component', () => {

	it('should render component', () => {
		render(<SaveWallet />);

		const component = screen.getByTestId('save-wallet-container');
		expect(component).toBeInTheDocument();
	});

	it('should save user walllet', () => {
		const { getByTestId } = render(<SaveWallet />);

		axios.post.mockImplementation(() =>
			Promise.resolve({
				data: {
					chain: "ethereum",
					address: "address hex value",
					userToken: "userToken"
				},
			}));

		const chainSelect = getByTestId('chain-select');
		const addressInput = getByTestId('input-address');

		fireEvent.change(chainSelect, { target: { value: 'ethereum' } });
		fireEvent.change(addressInput, { target: { value: '0x29d7d1dd5b6f9c864d9db560d72a247c178ae86b' } });

		const submitBtn = getByTestId('submit-btn');
		fireEvent.click(submitBtn);

		expect(axios.post).toHaveBeenCalled();
	});
});
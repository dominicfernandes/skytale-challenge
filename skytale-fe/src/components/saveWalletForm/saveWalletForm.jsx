import './saveWalletForm.css';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const SaveWalletForm = ({ saveWallet }) => {
	const [chain, setChain] = useState('');
	const [address, setAddress] = useState('');
	const [hasChainError, setChainError] = useState(false);
	const [AddressErrorMessage, setAddressError] = useState('');
	const chainsList = ['binance', 'ethereum', 'fantom', 'polygon', 'arbitrum', 'avalanche', 'rsk'];

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!chain) {
			setChainError(true);
			return;
		} else {
			setChainError(false);
		}

		if (!address) {
			setAddressError('Wallet address is required');
			return;
		} else if (!RegExp(/^0x[a-fA-F0-9]{40}$/).test(address)) {
			setAddressError('Invalid Address');
			return;
		} else {
			setAddressError('');
		}

		saveWallet(chain, address);
	};

	const handleChange = (e) => {
		const { id, value } = e.target;

		if (id === 'chain') setChain(value);
		else if (id === 'address') setAddress(value);
	};

	return (
		<form className="save-wallet-form">
			<div className="save-wallet-form__wrapper">
				<div className="form-group">
					<label>Chain:</label>
					<select onChange={handleChange} id="chain">
						<option value="">Chain</option>
						{chainsList.map(c=><option key={c} value={c}>{c}</option>)}
					</select>
					{hasChainError && <small className="error">Please select a chain.</small>}
				</div>

				<div className="form-group">
					<label>Address:</label>
					<input
						type="text"
						placeholder="0x29d7d1dd5b6f9c864d9db560d72a247c178ae86b"
						id="address"
						onChange={handleChange}
					/>
					{AddressErrorMessage && <small className="error">{AddressErrorMessage}</small>}
				</div>
				<div className="form-actions">
					<button id="submit-btn" onClick={handleSubmit}>
						<FaArrowRight />
					</button>
				</div>
			</div>
		</form>
	);
};

export default SaveWalletForm;

import './saveWalletForm.css';
import {useNavigate} from 'react-router-dom';

const SaveWalletForm =()=>{
	const navigate = useNavigate();

	const handleSubmit=(e)=>{
		e.preventDefault();
		navigate('/wallet');
	}

	return(
		<form className="save-wallet-form">
			<div className="save-wallet-form__wrapper">
				<div className="form-group">
					<label>Chain:</label>
					<select>
						<option>ethereum</option>
						<option>polygon</option>
					</select>
				</div>

				<div className="form-group">
					<label>Address:</label>
					<input type="text" placeholder="0x29d7d1dd5b6f9c864d9db560d72a247c178ae86b" name="" id="" />
				</div>

				<button onClick={handleSubmit}>Go</button>
			</div>
		</form>
	);
}

export default SaveWalletForm;
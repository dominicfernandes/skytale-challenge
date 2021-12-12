import {SaveWalletForm} from '../../components';
import './saveWallet.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const SaveWallet = ()=>{
	const navigate = useNavigate(); 

	const saveWallet=(chain,address)=>{
		axios.post('http://localhost:3000/wallet',{chain,address})
		.then(response=>{
			console.log(response);
			localStorage.setItem('skyWallet_userToken',response.data.userToken);
			navigate('/wallet');
		})
		.catch(error=>console.log(error))
	}
	return(
		<div className="save-wallet">
			<div className="save-wallet__form-container">
				<SaveWalletForm saveWallet={saveWallet}/>
			</div>
		</div>
	);
}

export default SaveWallet;
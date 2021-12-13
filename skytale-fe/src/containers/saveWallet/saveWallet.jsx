import {SaveWalletForm} from '../../components';
import './saveWallet.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const SaveWallet = ()=>{
	const navigate = useNavigate(); 

	const saveWallet=(chain,address)=>{
		axios.post(`${process.env.REACT_APP_API_BASEURL}/wallet`,{chain,address})
		.then(response=>{
			localStorage.setItem('skyWallet_userToken',response.data.userToken);
			navigate('/wallet');
		})
		.catch(error=>console.log(error))
	}
	return(
		<div className="save-wallet" data-testid="save-wallet-container">
			<div className="save-wallet__form-container">
				<SaveWalletForm saveWallet={saveWallet}/>
			</div>
		</div>
	);
}

export default SaveWallet;
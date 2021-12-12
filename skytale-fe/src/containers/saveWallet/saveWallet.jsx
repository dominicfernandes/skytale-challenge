import {SaveWalletForm} from '../../components';
import './saveWallet.css';

const SaveWallet = ()=>{
	return(
		<div className="save-wallet">
			<div className="save-wallet__form-container">
				<SaveWalletForm/>
			</div>
		</div>
	);
}

export default SaveWallet;
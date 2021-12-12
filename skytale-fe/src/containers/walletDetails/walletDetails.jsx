import './walletDetails.css';
import {Balances, Transactions} from '../';

const WalletDetails = ()=>{
	return(
		<div className="wallet-details">
			<div className="wallet-details__wrapper">
				<div className="wallet-details__transactions">
					<Transactions/>
				</div>
				<div className="wallet-details__balances">
					<Balances/>
				</div>
			</div>
		</div>
	);
}

export default WalletDetails;
import './walletDetails.css';
import {Balances, Transactions} from '../';
import { useUserToken } from '../../hooks/useUserToken';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WalletDetails = ()=>{
	const userToken = useUserToken();
	const navigate = useNavigate();
	
	useEffect(()=>{
		if(!userToken) navigate('/');
	});

	return(
		<div className="wallet-details" data-testid="wallet-details">
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
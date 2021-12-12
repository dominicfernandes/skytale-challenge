import { CoinBalance } from '../../components';
import { useFetchBalance } from '../../hooks/useFetchBalance';
import { useUserToken } from '../../hooks/useUserToken';
import CircleLoader from "react-spinners/ClipLoader";
import './balances.css';

const Balances = ()=>{
	const userToken = useUserToken()
	const [balances,isLoading] = useFetchBalance(userToken);

	return(
		<div className="balances">
			<h3 className="balances__title">Balances</h3>
			{
				balances.map((balance)=>{
					const coin = Object.keys(balance)[0];
					const {rate,amount,value} = balance[coin];
					return <CoinBalance key={coin} name={coin} rate={rate} amount={amount} value={value}/>;
				})
			}

			<div className="loader">
				<CircleLoader color="#283479" loading={isLoading} size={50} />
			</div>
		</div>
	);
}

export default Balances;
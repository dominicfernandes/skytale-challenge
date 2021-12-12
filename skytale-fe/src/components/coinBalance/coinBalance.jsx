import './coinBalance.css';

const CoinBalance = ({name,amount,rate,value})=>{
	return(
		<div className="coin-balance">
			<p>{name}</p>
			<p>{amount}</p>
			<p>{rate}</p>
			<p>{value}</p>
		</div>
	);
}

export default CoinBalance;
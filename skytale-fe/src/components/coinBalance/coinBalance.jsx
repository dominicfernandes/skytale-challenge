import './coinBalance.css';

const CoinBalance = ({name,amount,rate,value})=>{
	return(
		<div data-testid="coin-balance" className="coin-balance">
			<p>Coin: <b>{name}</b></p>
			<p>Amount: {amount}</p>
			<p>Rate:{rate}</p>
			<p>Value: {value}</p>
		</div>
	);
}

export default CoinBalance;
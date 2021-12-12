import './transaction.css';

const Transaction = ({hash,from,to,value,type})=>{
	return(
		<div className="transaction">
			<p>Hash: {hash}</p>
			<p>From: {from}</p>
			<p>To: {to}</p>
			<p>Value: {value}</p>
			<p>Type: {type}</p>
		</div>
	);
}

export default Transaction;
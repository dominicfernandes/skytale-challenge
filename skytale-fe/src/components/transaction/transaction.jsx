import './transaction.css';

const Transaction = ({hash,from,to,value,type})=>{
	return(
		<div>
			<p>{hash}</p>
			<p>{from}</p>
			<p>{to}</p>
			<p>{value}</p>
			<p>{type}</p>
		</div>
	);
}

export default Transaction;
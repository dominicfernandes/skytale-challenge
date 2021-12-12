import {FilterPanel, Transaction} from '../../components';
import axios from 'axios';
import { useUserToken } from '../../hooks/useUserToken';
import './transactions.css';
import { useEffect, useState } from 'react';
import CircleLoader from "react-spinners/ClipLoader";

const Transactions = ()=>{
	const [page,setPage]=useState(0);
	const [type,setType]=useState(null);
	const [hasNext,setHasNext]=useState(false);
	const [isLoading,setIsLoading]=useState(false);
	const [transactionData,setTransactionData] =useState(); 
	const [transactions,setTransactions] =useState([]); 
	const userToken = useUserToken();

	useEffect(()=>{
		if(!transactionData) fetchTransactionData(page,type)
	});

	const setFilterType=(filterType)=>{
		setType(type);
		setPage(0);
		fetchTransactionData(0,filterType,true);
	}

	const fetchTransactionData=(page,type,fromFilter=false)=>{
		let url = `${process.env.REACT_APP_API_BASEURL}/transactions?page=${page}`;

		if (type) url = `${url}&type=${type}`;

		setIsLoading(true);
		axios.get(url, {
			headers: { userToken }
		})
			.then(response => {
				console.log(response)
				setTransactionData(response.data);
				if(fromFilter) setTransactions(response.data.transactions);
				else setTransactions([...transactions,...response.data.transactions]);
				setHasNext(response.data.hasNext);
			})
			.catch(error =>{
				console.log(error)
			})
			.finally(_ => setIsLoading(false));
	}

	const handleScroll =(e)=>{
		if(e.target.scrollTop+e.target.clientHeight+50 >= e.target.scrollHeight && hasNext){
			fetchTransactionData(page+1,type);
			setPage(page+1);
		}
	}
	return(
		<div className="transactions" onScroll={handleScroll} data-testid="transactions-container">
			<h3 className="transactions__title">Transactions</h3>
			<div>
				<FilterPanel setFilterType={setFilterType}/>
			</div>
			
			{transactionData && transactions && transactions.map(({hash,from,to,value,type})=><Transaction key={Math.random()} hash={hash} from={from} to={to} value={value} type={type} />)}
			{!isLoading && transactions.length===0 && <p className="no-transactions">No transactions found</p>}
			<div className="loader">
				<CircleLoader color="#283479" loading={isLoading} size={50} />
			</div>
			
		</div>
	);
}

export default Transactions;
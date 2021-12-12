import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchBalance = (userToken) => {
	const [balances, setbalances] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API_BASEURL}/balance`, {
			headers: { userToken }
		})
			.then(response => {
				setbalances(response.data);
			})
			.catch(error => console.log(error))
			.finally(_ => setIsLoading(false));
	}, [userToken]);

	return [balances, isLoading];
}
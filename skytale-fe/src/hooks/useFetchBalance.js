import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useFetchBalance = (userToken) => {
	const [balances, setbalances] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API_BASEURL}/balance`, {
			headers: { userToken }
		})
			.then(response => {
				setbalances(response.data);
			})
			.catch(error => {
				console.log(error);
				const status = error.response.status
				if (status === 401) navigate('/');
			})
			.finally(_ => setIsLoading(false));
	}, [userToken, navigate]);

	return [balances, isLoading];
}
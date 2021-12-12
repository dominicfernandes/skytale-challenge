import { useEffect, useState } from 'react';
import './footer.css';

const Footer = ()=>{
	const [year,setYear] = useState();

	useEffect(()=>{
		setYear(2021);
	},[]);

	return(
		<footer>SkyWallet&trade; {year}</footer>
	);
}

export default Footer;
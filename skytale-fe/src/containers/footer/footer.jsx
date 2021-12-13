import { useEffect, useState } from 'react';
import './footer.css';

const Footer = ()=>{
	const [year,setYear] = useState();

	useEffect(()=>{
		setYear(new Date().getFullYear());
	},[]);

	return(
		<footer data-testid="footer">SkyWallet&trade; {year}</footer>
	);
}

export default Footer;
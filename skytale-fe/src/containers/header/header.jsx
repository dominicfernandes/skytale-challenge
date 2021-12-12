import { useNavigate } from 'react-router-dom';
import './header.css';
import { useLocation } from 'react-router-dom'

const Header = ()=>{
	const location = useLocation();
	const navigate = useNavigate();

	const handleBackClick =()=>{
		localStorage.removeItem('skyWallet_userToken');
		navigate('/');
	}
	
	return(
		<div>
		<header>
			<h1 className="brand">SkyWallet</h1>
			{location.pathname==='/wallet' && <button id="back-btn" onClick={handleBackClick}>change</button>}
		</header>
		</div>	
	);
}

export default Header;
import './App.css';
import { Footer, Header, SaveWallet, WalletDetails } from './containers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="skywallet">
			<div className="skywallet__bg-overlay"></div>
			<BrowserRouter>
				<div className="skywallet__wrapper">
					<Header />
					<div className="skywallet__wrapper-content">
						<Routes>
							<Route path='/' element={<SaveWallet />} />
							<Route path='/wallet' element={<WalletDetails />} />
						</Routes>
					</div>
					<div className="footer">
						<Footer />
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;

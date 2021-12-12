import { useEffect, useState } from 'react';
import {Transaction} from '../../components';
import './transactions.css';

const Transactions = ()=>{
	const [transactions, setTransactions] = useState([]);

	useEffect(()=>{
		setTransactions([
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
	
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'recieve',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'recieve',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'recieve',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
			{
				hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe',
				from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b',
				to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41',
				value: '0.35167462ETH',
				type: 'send',
			},
		]);
	},[]);

	return(
		<div className="transactions">
			{transactions.map(({hash,from,to,value,type})=><Transaction hash={hash} from={from} to={to} value={value} type={type} />)}
		</div>
	);
}

export default Transactions;
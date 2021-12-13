import './filterPanel.css';
const FilterPanel = ({ setFilterType }) => {
	const handleChange = (e) => {
		setFilterType(e.target.value);
	};

	const typesList = [
		'send',
		'receive',
		'trade',
		'add_liquidity',
		'remove_liquidity',
		'claim',
		'stake',
		'swap',
		'sell',
		'buy',
		'execution',
		'deposit',
		'withdrawal',
		'approval',
		'airdrop',
	];

	return (
		<div data-testid='filter-panel' className="filter-panel">
			<div className="type-filter">
				<label>Type:</label>
				<select className="filter-panel__type"  onChange={handleChange} data-testid='filter-select'>
					<option value="">All</option>
					{typesList.map(type=><option key={type} value={type}>{type}</option>)}
				</select>
			</div>
		</div>
	);
};

export default FilterPanel;

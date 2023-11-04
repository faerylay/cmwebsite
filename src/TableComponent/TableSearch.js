import React from 'react';

const TableSearch = ({ searchText, setSearchText }) => {
	return (
		<div style={{ width: 600, height: 100, margin: 'auto' }}>
			<input
				type="text"
				value={searchText}
				onChange={e => {
					setSearchText(e.target.value);
				}}
				placeholder="Search..."
				style={{ width: '50%', height: 50 }}
			/>
		</div>
	);
};

export default TableSearch;

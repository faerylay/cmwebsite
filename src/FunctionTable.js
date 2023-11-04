import React, { useEffect, useState } from 'react';

const FunctionTable = ({ hello }) => {
	const [data, setData] = useState('This is Data');

	const clickMe = () => {
		setData('This is clicked button data');
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setData('This is not my data');
		}, 2000);
		// time delay
		return () => {
			clearTimeout(timeout);
			setData('hello world');
		};
	}, [data]);
	// array dependencies

	return (
		<div style={{ color: '#fff' }}>
			{/* <h1>{hello}</h1> */}
			<h2>{data}</h2>
			<button onClick={clickMe}>button</button>
		</div>
	);
};

export default FunctionTable;

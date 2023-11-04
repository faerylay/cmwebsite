import React, { useEffect, useState } from 'react';
import TableInputForm from './TableInputForm';
import TableSearch from './TableSearch';
import TableContainer from './TableContainer';

const TableTodo = () => {
	const [data, setData] = useState([]);

	const apiRequest = () => {
		fetch('http://localhost:4000/movies', {
			method: 'GET',
		})
			.then(res => res.json())
			.then(data => {
				setData(data);
			});
	};
	useEffect(() => {
		apiRequest();
	}, []);

	const [error, setError] = useState('');
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [city, setCity] = useState('');
	const [occupation, setOccupation] = useState('');
	const [editIndex, setEditIndex] = useState(null);
	const [searchText, setSearchText] = useState('');
	const deleteList = index => {
		// promise -> keychain -> async await
		fetch(`http://localhost:4000/movies/deletemovie?id=${index}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then(responseData => {
				const newList = [...data];

				const res = newList.filter(a => a._id !== index);

				setData(res);
			})
			.catch(error => {
				console.error('Error:', error);
			});
	};
	const editList = (item, index) => {
		setEditIndex(item?._id);
		setName(item?.name);
		setAge(item?.age);
		setCity(item?.city);
		setOccupation(item?.occupation);
	};
	const filterdData = data.filter(item => {
		const testString = `${item?.age}`;

		if (searchText.toLowerCase() >= 'a' && searchText.toLowerCase() <= 'z') {
			return item.name.toLowerCase().includes(searchText.toLowerCase());
		} else {
			return testString.includes(searchText);
		}
	});
	return (
		<div>
			<TableInputForm
				error={error}
				setError={setError}
				name={name}
				setName={setName}
				age={age}
				setAge={setAge}
				city={city}
				setCity={setCity}
				occupation={occupation}
				setOccupation={setOccupation}
				editIndex={editIndex}
				data={data}
				setData={setData}
				createId={data?.length}
			/>
			<TableSearch searchText={searchText} setSearchText={setSearchText} />
			<TableContainer filterdData={filterdData} deleteList={deleteList} editList={editList} />
		</div>
	);
};

export default TableTodo;

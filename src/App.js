import React, { useState } from 'react';
import Header from './components/Header/Header';
import './app.css';
import { peopleData } from './dummydata';

// Create,Read(Filter),Update,Delete (CRUD)

const App = () => {
	// storage ,database

	const [data, setData] = useState(peopleData);
	const [error, setError] = useState('');
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [city, setCity] = useState('');
	const [occupation, setoOccupation] = useState('');
	const [editIndex, setEditIndex] = useState(null);
	const [searchText, setSearchText] = useState('');
	
	// setData -> delete ,update,filter, data manupulate
	//data -> read ->

	const createForm = () => {
		if (name === '' || age === '' || city === '' || occupation === '') {
			setError('Please fill the form');
			return;
		}

		if (editIndex !== null) {
			// edit
			const updatedList = [...data];
			updatedList[editIndex] = {
				name: name,
				age: age,
				city: city,
				occupation: occupation,
			};

			setData(updatedList);
		} else {
			// create
			setData([
				...data,
				{
					name: name,
					age: age,
					city: city,
					occupation: occupation,
				},
			]);
		}

		setName('');
		setAge('');
		setCity('');
		setoOccupation('');
	};

	const deleteList = index => {
		const newList = [...data];
		newList.splice(index, 1);
		setData(newList);
	};

	const editList = (item, index) => {
		setEditIndex(index);

		setName(item?.name);
		setAge(item?.age);
		setCity(item?.city);
		setoOccupation(item?.occupation);
	};
	//array -> manipulate array methods (forEach,map,splice,filter,find,)

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
			<Header />
			<div className="input-form">
				<h1>Table Form</h1>
				<span style={{ color: 'red' }}>{error}</span>
				{/* attribute , reactjs -> props  */}
				<input
					type="text"
					placeholder="Add Name"
					value={name}
					onChange={event => {
						setName(`${event.target.value}`);
					}}
				/>
				<input
					type="text"
					placeholder="Add Age"
					value={age}
					onChange={event => {
						setAge(`${event.target.value}`);
					}}
				/>
				<input
					type="text"
					placeholder="Add a City"
					value={city}
					onChange={event => {
						setCity(`${event.target.value}`);
					}}
				/>
				<input
					type="text"
					placeholder="Add Occupation"
					value={occupation}
					onChange={event => {
						setoOccupation(`${event.target.value}`);
					}}
				/>
				<button onClick={createForm}>Create Form</button>
			</div>
			<div className="table-container">
				<input
					type="text"
					value={searchText}
					onChange={e => {
						setSearchText(e.target.value);
					}}
					placeholder="Search..."
				/>
				<div className="table-header">
					<span>No.</span>
					<span>name</span>
					<span>age</span>
					<span>city</span>
					<span>occupation</span>
					<span>action</span>
				</div>
				<div className="table-body">
					{filterdData.map((item, index) => {
						return (
							<div key={index} className="table-list">
								<div className="table-list-item">
									<span>{index}</span>
								</div>
								<div className="table-list-item" onClick={() => {}}>
									<span>{item?.name}</span>
								</div>
								<div className="table-list-item">
									<span>{item?.age}</span>
								</div>
								<div className="table-list-item">
									<span>{item?.city}</span>
								</div>
								<div className="table-list-item">
									<span>{item?.occupation}</span>
								</div>
								<div className="action-btn">
									<button onClick={() => deleteList(index)}>Delete</button>
									<button onClick={() => editList(item, index)}>Update</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default App;

// Create ,Read(filter),Update,Delete (CRUD)

// array

// method

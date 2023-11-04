import React from 'react';

const TableInputForm = ({
	error,
	setError,
	name,
	setName,
	age,
	setAge,
	city,
	setCity,
	occupation,
	setOccupation,
	editIndex,
	data,
	setData,
	createId,
}) => {
	const createForm = () => {
		if (name === '' || age === '' || city === '' || occupation === '') {
			setError('Please fill the form');
			return;
		}

		if (editIndex !== null) {
			fetch(`http://localhost:4000/movies/editmovie?id=${editIndex}`, {
				method: 'PUT',
				body: JSON.stringify({
					id: editIndex,
					name: name,
					age: age,
					city: city,
					occupation: occupation,
				}),
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
					const newData = data.map(item => {
						if (item._id === responseData._id) {
							return { ...item, ...responseData };
						}
						return item;
					});

					setData(newData);
				})
				.catch(error => {
					console.error('Error:', error);
				});
		} else {
			fetch('http://localhost:4000/movies/addmovie', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: name,
					age: age,
					city: city,
					occupation: occupation,
				}),
			})
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(responseData => {
					setData([
						...data,
						{
							id: createId + 1,
							name: name,
							age: age,
							city: city,
							occupation: occupation,
						},
					]);
					console.log('Response Data:', responseData);
				})
				.catch(error => {
					console.error('Error:', error);
				});
		}

		setName('');
		setAge('');
		setCity('');
		setOccupation('');
	};
	return (
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
					setOccupation(`${event.target.value}`);
				}}
			/>
			<button onClick={createForm}>Create Form</button>
		</div>
	);
};

export default TableInputForm;

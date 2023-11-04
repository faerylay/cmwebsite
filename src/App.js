import React from 'react';
import Header from './components/Header/Header';
import TableTodo from './TableComponent/TableTodo';

import './app.css';
import Movies from './components/Movies';

const App = () => {
	return (
		<div>
			<Header />
			<div className="container">
				<TableTodo />
				<Movies />
			</div>
		</div>
	);
};

export default App;

// Class Component ,functional Component

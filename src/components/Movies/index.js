import React, { useEffect, useState } from 'react';
import './movies.css';

const Movies = () => {
	const [data, setData] = useState([]);

	const apiRequest = () => {
		// fetch('http://localhost:4000/movies?id=39&name=kyawkyaw',)
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		console.log(data);
		// 	});

		// fetch('http://www.omdbapi.com/?s=jack&apikey=752cc452')
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		setData([...data?.Search, ...data?.Search, ...data?.Search]);
		// 	});
	};
	useEffect(() => {
		apiRequest();
	}, []);

	return (
		<div className="movie-container">
			{data?.map((item, index) => {
				return (
					<div className="movie-card" key={index.toString()}>
						<img src={item?.Poster} width="100%" height="75%" alt={item?.title} />
						<div className="movie-card-body">
							<p>{item?.Title}</p>
							<p>{item?.Year}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Movies;

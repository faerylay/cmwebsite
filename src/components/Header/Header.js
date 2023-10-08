import React from 'react';
import './header.css';
import cmlogo from '../../assets/cm-logo.jpeg';
// object destructring

const Header = () => {
	return (
		<div className="header">
			<div className="main-header">
				<div className="header-menu">
					<p>Menu</p>
				</div>

				<div className="main-header-left">
					<div className="header-logo">
						<img src={cmlogo} width="auto" height="32px" alt="cm_logo" />
					</div>
					<div className="list">
						<ul>
							<li>
								<a href="http://localhost:3000/movie.html">Movie</a>
							</li>
							<li>
								<a href="http://localhost:3000/series.html">Series</a>
							</li>
							<li>
								<a href="http://localhost:3000/download.html">How to Download</a>
							</li>
							<li>
								<a href="http://localhost:3000/contact.html">Contact us</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="main-header-right">
					<button>Search</button>
				</div>
			</div>
		</div>
	);
};

export default Header;

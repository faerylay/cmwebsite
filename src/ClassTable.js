import React, { Component } from 'react';

// oop -> object orientent programming

class ClassTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: 'This is initial state data',
		};
	}

	componentDidMount() {
		setTimeout(() => {
			console.log('hello');
		}, 2000);
	}
	componentWillUnmount() {
		console.log('hello 2');
	}
	componentDidUpdate() {
		setTimeout(() => {
			this.setState({ data: 'componentDidUpdate' });
		}, 3000);
	}

	 clickMe = () => {
		this.setState({ data: 'This is clicked button class data' });
	};

	render() {
		return (
			<div style={{ color: '#fff' }}>
				{/* <h1>{this.props.hello}</h1> */}
				<h2>{this.state.data}</h2>
				<button onClick={this.clickMe}>button</button>
			</div>
		);
	}
}

export default ClassTable;

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Assistance extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div> 
				<h3>Assistance Section </h3>
				{this.props.children}
				<Link to="assistance/7">7</Link>
			</div>
			)
	}
}
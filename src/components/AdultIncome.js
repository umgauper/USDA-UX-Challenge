import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AdultIncome extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h3>Adult Income Section</h3>
				{this.props.children}
			</div>
			)
	}




}
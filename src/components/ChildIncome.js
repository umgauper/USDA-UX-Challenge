import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ChildIncome extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h3>Child Income Section</h3>
				{this.props.children}
			</div>
			)
	}




}
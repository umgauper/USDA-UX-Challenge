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
				<Link to="childIncome/8">8</Link>
				<Link to="childIncome/9">9</Link>
				<Link to="childIncome/10">10</Link>
				<Link to="childIncome/11">11</Link>

			</div>
			)
	}




}
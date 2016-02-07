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
				<Link to="adultIncome/12">12</Link>
				<Link to="adultIncome/13">13</Link>
				<Link to="adultIncome/14">14</Link>
				<Link to="adultIncome/15">15</Link>
				<Link to="adultIncome/16">16</Link>
				<Link to="adultIncome/17">17</Link>
				{this.props.children}
			</div>
			)
	}




}
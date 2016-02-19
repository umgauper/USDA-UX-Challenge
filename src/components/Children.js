import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Children extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h3>Children Section</h3>
				{this.props.children}
				 <Link to="children/1">1</Link>
				 <Link to="children/2">2</Link>
				 <Link to="children/3">3</Link>
				 <Link to="children/4">4</Link>
				 <Link to="children/5">5</Link>
				 <Link to="children/6">6</Link>
			</div>
			)
	}
}
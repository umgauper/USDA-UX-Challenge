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
			</div>
			)
	}
}
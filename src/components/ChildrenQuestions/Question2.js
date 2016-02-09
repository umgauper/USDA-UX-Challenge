import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Question2 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'Did the children you entered in the previous step include all children who live in your household, even children who are not your direct descendants? (For example, nieces/nephews who live with you, friends children who are staying with you)?'


		return (
			<div>
				<h6>{question}</h6>
				<Link to="children/1"><button>NO, go back</button></Link>
				<Link to="children/3"><button>YES, continue</button></Link>
			</div>
			)
	}




}
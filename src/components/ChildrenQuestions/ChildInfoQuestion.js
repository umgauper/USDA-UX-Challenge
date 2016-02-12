import React, { Component } from 'react';

export default class ChildInfoQuestion extends Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate() {
		return false
	}
	
	render() {
		let question = this.props.question

		return (
			<div>
				<h6>{question}</h6>
				{this.props.names.map((el, i)=> {
					return (<div>
								<p>{el}</p>
								<button onClick={()=> {this.props.onYesClick(i)}}>Yes</button>
								<button onClick={()=> {this.props.onNoClick(i)}}>NO</button>
							</div>
							)
				})}
			</div>
			)
	}
}
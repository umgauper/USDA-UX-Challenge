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
		let heading = this.props.heading

		return (
			<div>
				<h5>{heading}</h5>
				{this.props.names.map((el, i)=> {
					return (<div>
								<h6>{question(el)}</h6>
								<button onClick={()=> {this.props.onYesClick(i)}}>Yes</button>
								<button onClick={()=> {this.props.onNoClick(i)}}>NO</button>
							</div>
							)
				})}
			</div>
			)
	}
}
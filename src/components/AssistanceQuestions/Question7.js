import React, { Component } from 'react';

export default class Question7 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'Do any household members (including you) currently participate in one or more of the following assistance programs: SNAP, TANF, FDPIR?';
		let handleYesClick = () => {
			//set showCaseNumber Input to true

		}//Move to App state, and pass as prop
		let inputStyle = () => {

			//return this.props.showCaseNumberInput ? {display:'block'} : {display: 'none'}
		}

		return (
			<div>
				<h6>{question}</h6>
				<div onClick={handleYesClick()}>Yes</div>
				<input type="text" style={{display: 'none'}}/>
				<div>Next</div>
			</div>
			)
	}




}
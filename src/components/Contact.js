import React, { Component } from 'react';
import update from 'react-addons-update'

export default class Contact extends Component { //TODO: finish this part so next click sends updated state! (add onChange handlers to inputs!)
	constructor(props) {
		super(props)
		this.state = {
			aptIsValid: true,
			cityIsValid: true,
			stateIsValid: true,
			zipIsValid: true,
			nameIsValid: true,
			phoneIsValid: true,
			emailIsValid: true,
			contactInfo: {
				aptNumber: '',
				city: '',
				state: '',
				zip: null,
				name: '',
				phone: null,
				email: '',
				certified: false
			},
			formIsValid: false
		}
	}

	render() {
		let nextClickHandler = () => {
			console.log(this.state)
			this.props.onContactNextClick(this.state)
		}

		let updateFormValidity = () => {

			for (var prop in this.state) {
				if( this.state.hasOwnProperty(prop) && prop !== 'formIsValid') {
					if( this.state[prop] === false  ) {
						this.setState({formIsValid: false})
						return
					}
				}

			}

			// for (var prop in this.state.contactInfo) {
			// 	if ( this.state.contactInfo.hasOwnProperty(prop) ) {
			// 		if (!this.state.contactInfo[prop])
			// 			this.setState({formIsValid: false})
			// 			return
			// 	}
			// }

			this.setState({formIsValid: true})

		}

		let handleInput = (property, e) => {

			let obj = Object.defineProperty({}, property, 
				  {
				 	  enumerable: true,
					  configurable: true,
					  writable: true,
					  value: e.target.value
					})

			let newContactInfo = Object.assign({}, this.state.contactInfo, obj)

			this.setState({contactInfo: newContactInfo})


			switch (property) {
				case 'aptNumber': 
					let isAptValid = !/[^0-9]/.test(e.target.value)
					this.setState({aptIsValid: isAptValid})
					updateFormValidity()
					return
				case 'city':
					let isCityValid = !/[^a-zA-Z]/.test(e.target.value)
					this.setState({cityIsValid: isCityValid})
					updateFormValidity()
					return
				case 'state':
					let isStateValid = !/[^a-zA-Z]/.test(e.target.value)
					this.setState({stateIsValid: isStateValid})
					updateFormValidity()
					return
				case 'zip':
					let isZipValid = !/[^0-9]/.test(e.target.value)
					this.setState({zipIsValid: isZipValid})
					updateFormValidity()
					return
				case 'name':
					let isNameValid = !/[^a-zA-Z]/.test(e.target.value)
					this.setState({nameIsValid: isNameValid})
					updateFormValidity()
					return
				case 'phone': 
					let isPhoneValid = !/[^0-9\(\)\-\s]/.test(e.target.value)
					this.setState({phoneIsValid: isPhoneValid})
					updateFormValidity()
					return

				case 'email':
					let isEmailValid = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(e.target.value) || e.target.value === ''
					this.setState({emailIsValid: isEmailValid})
					updateFormValidity()
					return
				default:
					return
			}
		}

	
		return (
			<div>
				<h3>Contact	Information</h3>
				<p> Apt #</p>
				<input type="text" onChange={(e)=> { handleInput('aptNumber', e)} }/>
				<span
					style={ {color: 'rgb(211, 36, 33)'}}
					> {this.state.aptIsValid === false ? 'Invalid Input' : ''}</span>
				<p> City</p>
				<input type="text" onChange={(e)=> { handleInput('city', e)} }/>
				<span
					style={ {color: 'rgb(211, 36, 33)'}}> {this.state.cityIsValid === false ? 'Invalid Input' : ''}</span>
				<p>State</p>
				<input type="text" onChange={(e)=> { handleInput('state', e)} }/>
				<span style={ {color: 'rgb(211, 36, 33)'}}> {this.state.stateIsValid === false ? 'Invalid Input' : ''}</span>
				<p>Zip Code</p>
				<input type="text" onChange={(e)=> { handleInput('zip', e)} }/>
				<span style={ {color: 'rgb(211, 36, 33)'}}> {this.state.zipIsValid === false ? 'Invalid Input' : ''}</span>
				<p>Your Name</p>
				<input type="text" onChange={(e)=> { handleInput('name', e)} }/>
				<span style={ {color: 'rgb(211, 36, 33)'}}> {this.state.nameIsValid === false ? 'Invalid Input' : ''}</span>
				<p>Daytime Phone</p>
				<input type="text" onChange={(e)=> { handleInput('phone', e)} }/>
				<span style={ {color: 'rgb(211, 36, 33)'}}> {this.state.phoneIsValid === false ? 'Invalid Input' : ''}</span>
				<p>Email</p>
				<input type="email" onChange={(e)=> { handleInput('email', e)} }/>
				<span style={ {color: 'rgb(211, 36, 33)'}}> {this.state.emailIsValid === false ? 'Invalid Input' : ''}</span>

				<p>"I certify (promise) that all information on this application is true and that all income is reported. I understand that this information is given in connection with the receipt of federal funds, and that school officials may verify(check) the information. I am aware that if I purposely give false information, my children may lose meal benefits, and I may be prosecuted under applicable state and Federal laws."</p>
				<input type="checkbox" onChange={(e)=> { handleInput('certified', e)} }/>
				<button 
					disabled= { !this.state.formIsValid } 
					onClick={nextClickHandler}>

				NEXT</button>	
			</div>
			)
	}
}

// TODO: state drop-down input? (and find users' zip automatically?)
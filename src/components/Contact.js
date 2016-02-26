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

	componentDidMount() {
		alert('component mounted!')
		window.getElementsByTagName('input').addEventListener('onInput', ()=> { console.log('input entered')} )

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
				<h3>Contact	Section</h3>
				<p> Apt #</p>
				<input type="text" onChange={(e)=> { handleInput('aptNumber', e)} }/>
				<span> {this.state.aptIsValid === false ? 'INVALID' : ''}</span>
				<p> City</p>
				<input type="text" onChange={(e)=> { handleInput('city', e)} }/>
				<span> {this.state.cityIsValid === false ? 'INVALID' : ''}</span>
				<p>State</p>
				<input type="text" onChange={(e)=> { handleInput('state', e)} }/>
				<span> {this.state.stateIsValid === false ? 'INVALID' : ''}</span>
				<p>Zip Code</p>
				<input type="text" onChange={(e)=> { handleInput('zip', e)} }/>
				<span> {this.state.zipIsValid === false ? 'INVALID' : ''}</span>
				<p>Your Name</p>
				<input type="text" onChange={(e)=> { handleInput('name', e)} }/>
				<span> {this.state.nameIsValid === false ? 'INVALID' : ''}</span>
				<p>daytime phone</p>
				<input type="text" onChange={(e)=> { handleInput('phone', e)} }/>
				<span> {this.state.phoneIsValid === false ? 'INVALID' : ''}</span>
				<p>email</p>
				<input type="email" onChange={(e)=> { handleInput('email', e)} }/>
				<span> {this.state.emailIsValid === false ? 'INVALID' : ''}</span>

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
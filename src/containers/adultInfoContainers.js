import React from 'react'
import { connect } from 'react-redux'
import { addAdultNames, updateAdultInfo, updateContactInfo, updateSSN } from '../actions'
import Question12 from '../components/AdultIncomeQuestions/Question12'
import { Question13, Question14, Question15, Question16 } from '../components/AdultIncomeQuestions/Questions13-16'
import Question17 from '../components/AdultIncomeQuestions/Question17'
import Contact from '../components/Contact'


import ChildInfoQuestion from '../components/ChildrenQuestions/ChildInfoQuestion'

const mapStateToProps = (state) => {
	return {
		names: state.appState.adultFirstNamesArray
	}
}

const mapDispatchToProps0 = (dispatch) => {
	return {
		onQuestion12NextClick: (adultNamesArray, adultFirstNamesArray) => {
			dispatch(addAdultNames(adultNamesArray, adultFirstNamesArray))	
		}
	}	
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAdultInfoClick: (index, adultInfo) => {
			dispatch(updateAdultInfo(index, adultInfo))
		}
	}
}

const mapContactDispatchToProps = (dispatch) => {
	return {
		onContactNextClick: (contactInfo) => {
			dispatch(updateContactInfo(contactInfo))
		}
	}
}

const mapSSNDispatchToProps = (dispatch) => {
	return {
		onNextClick: (ssnObj) => {
			dispatch(updateSSN(ssnObj))
		}
	}
}

export const Question12Container = connect(
	null,
	mapDispatchToProps0
	)(Question12)

export const Question13Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question13)

export const Question14Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question14)

export const Question15Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question15)

export const Question16Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question16)

export const Question17Container = connect(
	null,
	mapSSNDispatchToProps
	)(Question17)

export const ContactContainer = connect(
	null,
	mapContactDispatchToProps
	)(Contact)


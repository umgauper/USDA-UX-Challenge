import React from 'react'
import { connect } from 'react-redux'
import { addAdultNames, updateAdultInfo } from '../actions'
import Question12 from '../components/AdultIncomeQuestions/Question12'
import Question13 from '../components/AdultIncomeQuestions/Question13'
import Question14 from '../components/AdultIncomeQuestions/Question14'
import Question15 from '../components/AdultIncomeQuestions/Question15'
import Question16 from '../components/AdultIncomeQuestions/Question16'
import Question17 from '../components/AdultIncomeQuestions/Question17'


import ChildInfoQuestion from '../components/ChildrenQuestions/ChildInfoQuestion'

const mapStateToProps = (state) => {
	return {
		names: state.appState.adultFirstNamesArray
	}
}

const mapDispatchToProps0 = (dispatch) => {
	return {
		onQuestion12NextClick: (adultNamesArray, adultFirstNamesArray) => {
			dispatch(addAdultNames(adultNamesArray, adultFirstNamesArray))	//TODO: Refactor, too much repetition! (similar to update childnames...)
		}
	}	
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAdultInfoClick: (adultInfo, index) => {
			dispatch(updateAdultInfo(adultInfo, index))
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
	mapStateToProps,
	mapDispatchToProps
	)(Question17)


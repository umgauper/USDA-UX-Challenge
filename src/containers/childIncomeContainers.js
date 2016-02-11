import React from 'react'
import { connect } from 'react-redux'
import { updateChildIncome } from '../actions'
import Question8 from '../components/ChildIncomeQuestions/Question8'
import Question9 from '../components/ChildIncomeQuestions/Question9'
import Question10 from '../components/ChildIncomeQuestions/Question10'
import Question11 from '../components/ChildIncomeQuestions/Question11'

const mapStateToProps = (state) => {
	return {
		names: state.namesArray
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onNextClick: (incomeInfo, index) => {
			dispatch(updateChildIncome(incomeInfo, index))
			console.log('onNextClick called')
		}
	}
}

export const Question8Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question8)

export const Question9Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question9)

export const Question10Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question10)

export const Question11Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question11)
import React from 'react'
import { connect } from 'react-redux'
import { updateChildInfo, updateCaseNumber } from '../actions'
import Question3 from '../components/ChildrenQuestions/Question3'
import Question4 from '../components/ChildrenQuestions/Question4'
import Question5 from '../components/ChildrenQuestions/Question5'
import Question6 from '../components/ChildrenQuestions/Question6'
import Question7 from '../components/AssistanceQuestions/Question7'
import Question8 from '../components/ChildIncomeQuestions/Question8'
import Question9 from '../components/ChildIncomeQuestions/Question9'
import Question10 from '../components/ChildIncomeQuestions/Question10'
import Question11 from '../components/ChildIncomeQuestions/Question11'

import ChildInfoQuestion from '../components/ChildrenQuestions/ChildInfoQuestion'

const mapStateToProps = (state) => {
	return {
		names: state.appState.firstNamesArray
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChildInfoClick: (childInfo, index) => {
			dispatch(updateChildInfo(childInfo, index))
		}
	}
}

const mapAssistanceDispatchToProps = (dispatch) => {
	return {
		onAssistanceNextClick: (caseNumber) => {
			dispatch(updateCaseNumber(caseNumber))
		}
	}
}

export const Question3Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question3)

export const Question4Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question4)

export const Question5Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question5)

export const Question6Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question6)

export const Question7Container = connect(
	null,
	mapAssistanceDispatchToProps
	)(Question7)

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

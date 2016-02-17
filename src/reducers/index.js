import { ADD_CHILD_NAMES, UPDATE_CHILD_INFO, ADD_ADULT_NAMES, UPDATE_ADULT_INFO, UPDATE_CASE_NUMBER } from '../actions'
import { combineReducers } from 'redux'
import update from 'react-addons-update'

const initialState = {
	namesArray: [],
	firstNamesArray: [],
	adultNamesArray: [],
	adultFirstNamesArray: [],
	caseNumber: null
}

const appState = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CHILD_NAMES:
			return update(state, {
				namesArray: { 
					$set: Array.concat(state.namesArray, action.namesArray) 
				},
				firstNamesArray: { 
					$set: Array.concat(state.firstNamesArray, action.firstNamesArray) 
				}
			})

		case UPDATE_CHILD_INFO: //TODO: refactor Object.assign to use upate syntax
			return update(state, {
				namesArray: {
					$set: [...state.namesArray.slice(0, action.index), 
								Object.assign({}, state.namesArray[action.index], action.childInfo),
								...state.namesArray.slice(action.index + 1)]
				}
			})

		case ADD_ADULT_NAMES: 
			return update(state, {
				adultNamesArray: { 
					$set: Array.concat(state.adultNamesArray, action.namesArray) 
				},
				adultFirstNamesArray: { 
					$set: Array.concat(state.adultFirstNamesArray, action.firstNamesArray) 
				}
			})


		case UPDATE_ADULT_INFO: 
			return update(state, {
				adultNamesArray: {
					$set: [...state.adultNamesArray.slice(0, action.index), 
								Object.assign({}, state.adultNamesArray[action.index], action.adultInfo),
								...state.adultNamesArray.slice(action.index + 1)]
				}
			})

		case UPDATE_CASE_NUMBER:
			return update(state, {
				caseNumber: {
					$set: action.caseNumber
				}
			})
				
		default:
			return state
	}

}


const usdaApp = combineReducers({
	appState
})

export default usdaApp;

/*
childname = {
	namesArray: [
		{first: '',
			MI: '',
		  last:	'',
		  id: NUM,
		  isStudent: bool
		}
	]
}
*/
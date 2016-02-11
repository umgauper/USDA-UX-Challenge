import { ADD_CHILD_NAMES, UPDATE_CHILD_INFO, UPDATE_CHILD_INCOME } from '../actions'
import { combineReducers } from 'redux'
import update from 'react-addons-update'

const initialState = {
	namesArray: [],
	firstNamesArray: []
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

		case UPDATE_CHILD_INCOME:
			return update(state, {
				namesArray: {
					$set: [...state.namesArray.slice(0, action.index), 
								Object.assign({}, state.namesArray[action.index], action.childIncomeInfo),
								...state.namesArray.slice(action.index + 1)]
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
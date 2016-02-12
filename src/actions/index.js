/*
 * action types
 */

export const ADD_CHILD_NAMES = 'ADD_CHILD_NAMES'
export const UPDATE_CHILD_INFO = 'UPDATE_CHILD_INFO'

/*
 * action creators
 */
 
export const addChildNames = (namesArray, firstNamesArray) => {
	return {
		type: ADD_CHILD_NAMES,
		namesArray,
		firstNamesArray
	}
}

export const updateChildInfo = (childInfo, index) => {
	return {
		type: UPDATE_CHILD_INFO,
		index: index,
		childInfo
	}
}



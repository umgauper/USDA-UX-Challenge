/*
 * action types
 */

export const ADD_CHILD_NAMES = 'ADD_CHILD_NAMES'
export const UPDATE_CHILD_INFO = 'UPDATE_CHILD_INFO'
export const ADD_ADULT_NAMES = 'ADD_ADULT_NAMES'
export const UPDATE_ADULT_INFO = 'UPDATE_ADULT_INFO'

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

export const addAdultNames = (namesArray, firstNamesArray) => {
	return {
		type: ADD_ADULT_NAMES,
		namesArray,
		firstNamesArray
	}

}

export const updateAdultInfo = (index, adultInfo) => {
	return {
		type: UPDATE_ADULT_INFO,
		index: index,
		adultInfo
	}
}

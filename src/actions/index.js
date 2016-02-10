/*
 * action types
 */

export const ADD_CHILD_NAMES = 'ADD_CHILD_NAMES'
export const UPDATE_CHILD_INFO = 'UPDATE_CHILD_INFO'

/*
 * action creators
 */
 
export const addChildNames = (namesArray) => {
	return {
		type: ADD_CHILD_NAMES,
		namesArray: namesArray
	}
}

export const updateIsStudent = (index, bool) => {
	return {
		type: UPDATE_CHILD_INFO,
		index: index,
		childInfo: {
			isStudent: bool
		}
	}

}

export const updateIsFoster= (index, bool) => {
	return {
		type: UPDATE_CHILD_INFO,
		index: index,
		childInfo: {
			isFoster: bool
		}
	}

}

export const updateIsMigrant = (index, bool) => {
	return {
		type: UPDATE_CHILD_INFO,
		index: index,
		childInfo: {
			isMigrant: bool
		}
	}

}

export const updateIsHeadStart = (index, bool) => {
	return {
		type: UPDATE_CHILD_INFO,
		index: index,
		childInfo: {
			isHeadStart: bool
		}
	}

}
export const initialState = {
	isSortingEnable: false,
	searchPhrase: '',
};

export const controlPanelReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_SORTING_ENABLE':
			return {
				...state,
				isSortingEnable: payload,
			}
		case 'SET_SEARCH_PHRASE':
			return {
				...state,
				searchPhrase: payload,
			};
		default:
			return state;
	}
};

export const initialState = {
	todos: [],
	editingId: null,
	errors: null,
	isLoading: false,
};

export const todosReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_LOADING':
			return {
				...state,
				isLoading: true,
			};
		case 'SET_TODOS_SUCCESS':
			return {
				...state,
				isLoading: false,
				todos: payload,
			};
		case 'SET_TODOS_ERROR':
			return {
				...state,
				isLoading: false,
				errors: payload,
			};
		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, payload],
			};
		case 'UPDATE_TODO':
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === payload.id ? payload : todo,
				),
			};
		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== payload),
			};
		case 'SET_EDITING_ID':
			return {
				...state,
				editingId: payload,
			};
		default:
			return state;
	}
};

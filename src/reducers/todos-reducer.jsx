export const initialState = {
	todos: [],
	editingId: null,
};

export const todosReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_TODOS':
			return {
				...state,
				todos: payload,
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

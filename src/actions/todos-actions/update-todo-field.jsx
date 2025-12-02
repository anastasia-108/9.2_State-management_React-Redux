import { updateTodo } from '../../api/api';

export const updateTodoField = (id, changes) => async (dispatch, getState) => {
	const state = getState();
	const todo = state.todosState.todos.find((t) => t.id === id);
	const updatedTodo = {
		...todo,
		...changes,
	}
	const result = await updateTodo(updatedTodo);
	dispatch({
		type: 'UPDATE_TODO',
		payload: result,
	});
	dispatch({
		type: 'SET_EDDITING_ID',
		payload: null,
	});
};

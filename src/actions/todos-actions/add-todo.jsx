import { createTodo } from '../../api/api';

export const addTodo = () => async (dispatch) => {
	const newTodo = await createTodo({ title: '', completed: false });
	dispatch({
		type: 'ADD_TODO',
		payload: newTodo,
	});
	dispatch({
		type: 'SET_EDITING_ID',
		payload: newTodo.id,
	});
};

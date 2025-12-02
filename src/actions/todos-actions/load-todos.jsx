import { readTodos } from '../../api/api';

export const loadTodos = () => async (dispatch) => {
	const todos = await readTodos();
	dispatch({
		type: 'SET_TODOS',
		payload: todos,
	});
};

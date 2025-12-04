import { readTodos } from '../../api/api';

export const loadTodos = () => async (dispatch) => {
	dispatch({type: 'SET_LOADING'});
	try {
		const todos = await readTodos();
		dispatch({
			type: 'SET_TODOS_SUCCESS',
			payload: todos,
		});
	} catch (error) {
		dispatch({
			type: 'SET_TODOS_ERROR',
			payload: error.message,
		});
	}
};

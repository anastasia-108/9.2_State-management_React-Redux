import { deleteTodo } from '../../api/api';

export const removeTodo = (id) => async (dispatch) => {
	await deleteTodo(id);
	dispatch({
		type: 'DELETE_TODO',
		payload: id,
	});
};

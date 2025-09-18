export const fetchServer = (method, { id, ...payload } = {}) => {
	let URL = 'http://localhost:3000/todos';
	let options = {
		method,
	};
	if (method === 'POST' || method === 'PUT') {
		options.headers = { 'Content-Type': 'application/json' };
		options.body = JSON.stringify(payload);
	}
	if ((method === 'PUT' || method === 'DELETE') && id) {
		URL += `/${id}`;
	}
	return fetch(URL, options).then((jsonData) => {
		if (jsonData.ok && jsonData.headers.has('content-type')) {
			return jsonData.json();
		}
		return null;
	});
};

export const createTodo = (newTodo) => fetchServer('POST', { ...newTodo });

export const readTodos = () => fetchServer('GET');

export const updateTodo = (updatedTodo) => fetchServer('PUT', { ...updatedTodo });

export const deleteTodo = (todoId) => fetchServer('DELETE', { id: todoId });

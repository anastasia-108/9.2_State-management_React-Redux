import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './App.module.css';
import { ControlPanel, Todo } from './components';
import { selectTodos, selectSearchPhrase, selectIsSortingEnable } from './selectors';
import { loadTodos } from './actions/todos-actions';

export const App = () => {
	const todos = useSelector(selectTodos);
	const searchPhrase = useSelector(selectSearchPhrase);
	const isSortingEnable = useSelector(selectIsSortingEnable);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadTodos());
	}, [dispatch]);

	const filteredTodosOnSearchPhrase = todos.filter((todo) =>
		todo.title.toLowerCase().includes(searchPhrase.toLowerCase()),
	);

	const displayedTodos = isSortingEnable
		? [...filteredTodosOnSearchPhrase].sort((a, b) =>
				a.title.toUpperCase().localeCompare(b.title.toUpperCase()),
			)
		: filteredTodosOnSearchPhrase;

	return (
		<div className={styles.app}>
			<ControlPanel />
			<div>
				{displayedTodos.map((todo) => (
					<Todo key={todo.id} id={todo.id} />
				))}
			</div>
		</div>
	);
};

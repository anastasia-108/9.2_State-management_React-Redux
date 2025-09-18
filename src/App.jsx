import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { ControlPanel, Todo } from './components';
import { createTodo, readTodos, updateTodo, deleteTodo } from './api';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [editingId, setEditingId] = useState(null);
	const [isSortingEnable, setIsSortingEnable] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');

	const onTodoAdd = () => {
		createTodo({ title: '', completed: false }).then((createdTodo) => {
			setTodos((prev) => [...prev, createdTodo]);
			setEditingId(createdTodo.id);
		});
	};

	const onToggleComplete = (id, title, newCompleted) => {
		updateTodo({ id, title, completed: newCompleted }).then((updatedTodo) => {
			setTodos((prev) => prev.map((todo) => (todo.id === id ? updatedTodo : todo)));
		});
	};

	const onTodoTitleChange = (id, newTitle, completed) => {
		updateTodo({ id, title: newTitle, completed }).then((updatedTodo) => {
			setTodos((prev) => prev.map((todo) => (todo.id === id ? updatedTodo : todo)));
		});
	};

	const onTodoEdit = (id) => {
		setEditingId(id);
	};

	const onTodoSaveAfterEdit = () => {
		setEditingId(null);
	};

	const onTodoDelete = (id) => {
		deleteTodo(id).then(() => {
			setTodos((prev) => prev.filter((todo) => todo.id !== id));
		});
	};

	const filteredTodosOnSearchPhrase = todos.filter((todo) =>
		todo.title.toLowerCase().includes(searchPhrase.toLowerCase()),
	);

	const displayedTodos = isSortingEnable
		? [...filteredTodosOnSearchPhrase].sort((a, b) =>
				a.title.toUpperCase().localeCompare(b.title.toUpperCase()),
			)
		: filteredTodosOnSearchPhrase;

	useEffect(() => {
		readTodos().then((loadedTodos) => setTodos(loadedTodos));
	}, []);

	return (
		<div className={styles.app}>
			<ControlPanel
				onTodoAdd={onTodoAdd}
				searchPhrase={searchPhrase}
				setSearchPhrase={setSearchPhrase}
				isSortingEnable={isSortingEnable}
				setIsSortingEnable={setIsSortingEnable}
			/>
			<div>
				{displayedTodos.map(({ id, title, completed }) => (
					<Todo
						key={id}
						id={id}
						title={title}
						completed={completed}
						editingId={editingId === id}
						onToggleComplete={() => onToggleComplete(id, title, !completed)}
						onTodoTitleChange={(newTitle) =>
							onTodoTitleChange(id, newTitle, completed)
						}
						onTodoEdit={() => onTodoEdit(id)}
						onTodoSaveAfterEdit={() => onTodoSaveAfterEdit()}
						onTodoDelete={() => onTodoDelete(id)}
					/>
				))}
			</div>
		</div>
	);
};

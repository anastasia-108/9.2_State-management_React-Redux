import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './todo.module.css';
import { selectTodos, selectEditingId } from '../../selectors';
import { updateTodoField, removeTodo, setEditingId } from '../../actions/todos-actions';

export const Todo = ({ id }) => {
	const todos = useSelector(selectTodos);
	const editingId = useSelector(selectEditingId);

	const dispatch = useDispatch();
	const inputRef = useRef(null);

	useEffect(() => {
		if (editingId && inputRef.current) {
			inputRef.current.focus();
		}
	}, [editingId]);

	const todo = todos.find((todo) => todo.id === id);
	if (!todo) return null;
	const { title, completed } = todo;

	const isEditing = editingId === id;

	return (
		<div className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				onChange={() => dispatch(updateTodoField(id, { completed: !completed }))}
			/>
			<div className={styles.todoTitle}>
				{isEditing ? (
					<input
						type="text"
						value={title}
						onChange={({ target }) =>
							dispatch(updateTodoField(id, { title: target.value }))
						}
						ref={inputRef}
					/>
				) : (
					<div onClick={() => dispatch(setEditingId(id))}>{title}</div>
				)}
			</div>
			<div className={styles.todoButton}>
				{isEditing ? (
					<button onClick={() => dispatch(setEditingId(null))}>Сохранить</button>
				) : (
					<button onClick={() => dispatch(setEditingId(id))}>Редактировать</button>
				)}
				<button onClick={() => dispatch(removeTodo(id))}>Удалить</button>
			</div>
		</div>
	);
};

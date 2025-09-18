import { useEffect, useRef } from 'react';
import styles from './todo.module.css';

export const Todo = ({
	title,
	completed,
	editingId,
	onToggleComplete,
	onTodoTitleChange,
	onTodoEdit,
	onTodoSaveAfterEdit,
	onTodoDelete,
}) => {
	const inputRef = useRef(null);

	useEffect(() => {
		if (editingId && inputRef.current) {
			inputRef.current.focus();
		}
	}, [editingId])

	return (
		<div className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				onChange={onToggleComplete}
			/>
			<div className={styles.todoTitle}>
				{editingId ? (
					<input
						type="text"
						value={title}
						onChange={({ target }) => onTodoTitleChange(target.value)}
						ref={inputRef}
					/>
				) : (
					<div onClick={onTodoEdit}>{title}</div>
				)}
			</div>
			<div className={styles.todoButton}>
				{editingId ? (
					<button onClick={onTodoSaveAfterEdit}>Сохранить</button>
				) : (
					<button onClick={onTodoEdit}>Редактировать</button>
				)}
				<button onClick={onTodoDelete}>Удалить</button>
			</div>
		</div>
	);
};

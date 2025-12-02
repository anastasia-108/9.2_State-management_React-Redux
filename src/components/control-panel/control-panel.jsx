import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './control-panel.module.css';
import { selectSearchPhrase, selectIsSortingEnable } from '../../selectors';
import { debounce } from '../../utils';
import { addTodo } from '../../actions/todos-actions';
import { setSearchPhrase, setSortingEnable } from '../../actions/control-panel-actions';

export const ControlPanel = () => {
	const searchPhrase = useSelector(selectSearchPhrase);
	const isSortingEnable = useSelector(selectIsSortingEnable);
	const [localSearch, setLocalSearch] = useState(searchPhrase);

	const dispatch = useDispatch();

	const debouncedSetSearch = useRef(
		debounce((localSearch) => {
			dispatch(setSearchPhrase(localSearch))
		}, 300),
	);

	useEffect(() => {
		debouncedSetSearch.current(localSearch);
	}, [localSearch]);

	return (
		<div className={styles.controlPanel}>
			<input
				className={styles.search}
				type="text"
				placeholder="Поиск..."
				value={localSearch}
				onChange={({ target }) => setLocalSearch(target.value)}
			/>
			<input
				className={styles.sortingButton}
				type="checkbox"
				checked={isSortingEnable}
				onChange={() => dispatch(setSortingEnable(!isSortingEnable))}
			/>
			<button className={styles.addButton} onClick={() => dispatch(addTodo())}>
				Добавить
			</button>
		</div>
	);
};

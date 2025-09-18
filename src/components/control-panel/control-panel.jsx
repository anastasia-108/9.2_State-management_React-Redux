import { useEffect, useRef, useState } from 'react';
import styles from './control-panel.module.css';
import { debounce } from '../../utils';

export const ControlPanel = ({
	onTodoAdd,
	searchPhrase,
	setSearchPhrase,
	isSortingEnable,
	setIsSortingEnable,
}) => {
	const [localSearch, setLocalSearch] = useState(searchPhrase);

	const debouncedSetSearch = useRef(
		debounce((value) => {
			setSearchPhrase(value);
		}, 300),
	);

	useEffect(() => {
		debouncedSetSearch.current(localSearch);
	}, [localSearch]);

	const onSearchPhraseChange = ({ target }) => {
		setLocalSearch(target.value);
	};

	const onSortingChange = () => {
		setIsSortingEnable(!isSortingEnable);
	};

	return (
		<div className={styles.controlPanel}>
			<input
				className={styles.search}
				type="text"
				placeholder="Поиск..."
				value={localSearch}
				onChange={onSearchPhraseChange}
			/>
			<input
				className={styles.sortingButton}
				type="checkbox"
				checked={isSortingEnable}
				onChange={onSortingChange}
			/>
			<button className={styles.addButton} onClick={onTodoAdd}>
				Добавить
			</button>
		</div>
	);
};

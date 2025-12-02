export const selectTodos = ((state) => state.todosState.todos);
export const selectEditingId = ((state) => state.todosState.editingId);
export const selectIsSortingEnable = ((state) => state.controlPanelState.isSortingEnable);
export const selectSearchPhrase = ((state) => state.controlPanelState.searchPhrase);

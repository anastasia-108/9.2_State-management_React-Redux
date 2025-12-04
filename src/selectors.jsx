export const selectTodos = ((state) => state.todosState.todos);
export const selectEditingId = ((state) => state.todosState.editingId);
export const selectIsLoading = ((state) => state.todosState.isLoading);
export const selectErrors = ((state) => state.todosState.errors);
export const selectIsSortingEnable = ((state) => state.controlPanelState.isSortingEnable);
export const selectSearchPhrase = ((state) => state.controlPanelState.searchPhrase);

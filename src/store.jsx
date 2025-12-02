import { combineReducers, createStore, applyMiddleware } from 'redux';
import { todosReducer, controlPanelReducer } from './reducers';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
	todosState: todosReducer,
	controlPanelState: controlPanelReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));

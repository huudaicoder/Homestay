import { createStore, combineReducers } from 'redux';
import { filterReducer, homestayIdReducer, guestNumberReducer, dayReducer } from './reducers';

const rootReducer = combineReducers({ filterReducer, homestayIdReducer, guestNumberReducer, dayReducer });
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
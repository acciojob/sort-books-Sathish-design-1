import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Use curly braces here
import { bookReducer } from './reducer';

const store = createStore(bookReducer, applyMiddleware(thunk));

export default store;
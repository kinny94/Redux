"use strict"
import { combineReducers } from 'redux';

// import reducers from different files
import { booksReducers } from './booksReducers';
import { cartReducers } from './cartReducers';

// Combine the reducers
export default combineReducers({
    books: booksReducers,
    cart: cartReducers
});
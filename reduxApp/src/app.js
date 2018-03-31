"use strict"
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

//import combines reducers
import reducers from './reducers/index';

// import actions
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';

const middleware = applyMiddleware( logger );
const store = createStore( reducer, middleware );

store.dispatch( postBooks(  
    [
        {
            id: 1,
            title: 'This is the title of the book',
            description: 'This is the book description',
            price: 33.33
        },
        {
            id: 2,
            title: 'This is the title of the second book',
            description: 'This is the second book description',
            price: 50
        }
    ]  
));

//DELETE a BOOK
store.dispatch( deleteBooks(
    { id: 1    }
)); 

//UPDATE a book
store.dispatch( updateBooks(
    {
        id: 2,
        title: 'Learn React in 24h'
    }
)); 

// CART Actions
//add to cart
store.dispatch( addToCart([{ id: 2 }]))
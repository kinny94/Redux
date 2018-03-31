"use strict"
import { createStore } from 'redux';

//import combines reducers
import reducers from './reducers/index';

const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    console.log( 'current state is : ' + store.getState()[1].price );
});

store.dispatch({
    type: "POST_BOOK",
    payload: [
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
});

store.dispatch({
    type: "POST_BOOK",
    payload: [
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
}); 

//DELETE a BOOK
store.dispatch({
    type: "DELETE_BOOK",
    payload: { id: 1 }
}); 

//UPDATE a book
store.dispatch({
    type: "UPDATE_BOOK",
    payload: { 
        id: 1,
        title: 'Learn react in 24h' 
    }
}); 

// CART Actions
//add to cart
store.dispatch({
    type: "ADD_TO_CART",
    payload: [
        {
            id: 2
        }
    ]
})
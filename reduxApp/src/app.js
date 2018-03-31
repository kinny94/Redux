"use strict"
import { createStore } from 'redux';

// Step 3 create and dispatch actions 
const reducer = (( state = 0, action ) => {
    switch( action.type ){
        case "INCREMENT":
            return state + action.payload;
            break;
    }
    return state;
});

// Step 1 create a store
const store = createStore( reducer );
console.log( "Hello" );

store.subscribe(() => {
    console.log( 'current state is : ' + store.getState() );
});

// Step 2 Define the reducers  
store.dispatch({
    type: "INCREMENT",
    payload: 1
})

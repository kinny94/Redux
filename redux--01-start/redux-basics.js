const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    counter: 0
};

// We need to create the reducer first before we create the store
const rootReducer = ( state = initialState, action ) => {
    return state;
};

// Reducer


// Store
const store = createStore( rootReducer );
console.log(store.getState());


// Dispatching Action

// Subscription
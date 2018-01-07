const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    counter: 0
};

// We need to create the reducer first before we create the store
// Reducer
const rootReducer = ( state = initialState, action ) => {
    
    if( action.type === 'INC_COUNTER' ){
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    if( action.type === 'ADD_COUNTER' ){
        return {
            ...state,
            counter: state.counter + 10
        };
    }
    return state;
};

// Store
const store = createStore( rootReducer );
console.log(store.getState());

// Subscriptions - Comes before dispatching actions
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({
    type: 'INC_COUNTER'
});

store.dispatch({
    type: 'ADD_COUNTER',
    value: 10
});

console.log(store.getState());
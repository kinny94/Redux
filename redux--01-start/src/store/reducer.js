import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []    
};

const reducer = ( state = initialState, action ) => {

    switch( action.type ){
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1 ;
            return newState;

        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }

        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }

        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val  
            }

        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter }) // use concat instead pof push coz it immutable fashion of adding stuff
            }

        case actionTypes.DELETE_RESULTS:
            const newArray = state.results.filter( result => result.id !== action.resultElId );    // returns anew array
            return {
                ...state,
                results: newArray
            }
        default:
            return state;
    }
}

export default reducer;
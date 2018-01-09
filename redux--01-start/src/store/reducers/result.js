import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []    
};

const reducer = ( state = initialState, action ) => {

    switch( action.type ){

        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result }) // use concat instead pof push coz it immutable fashion of adding stuff
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
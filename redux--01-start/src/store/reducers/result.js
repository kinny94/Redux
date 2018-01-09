import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []    
};

const reducer = ( state = initialState, action ) => {

    switch( action.type ){

        case actionTypes.STORE_RESULTS:
            return updateObject( state, { results: state.results.concat({ id: new Date(), value: action.result }) })

        case actionTypes.DELETE_RESULTS:
            const newArray = state.results.filter( result => result.id !== action.resultElId );    // returns anew array
            return updateObject( state, { results: newArray })

        default:
            return state;
    }
}

export default reducer;
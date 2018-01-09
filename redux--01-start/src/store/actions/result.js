import * as actionTypes from './actionTypes';

export const saveResults = ( res ) => {
    return {
        type: actionTypes.STORE_RESULTS,
        result: res
    };
}

export const storeResults = ( res ) => {

    return ( dispatch, getState ) => {
        setTimeout( () => {
            const oldCounter = getState().ctr .counter;
            console.log( oldCounter );
            dispatch( saveResults( res ) );
        }, 2000 );
    }
};

export const deleteResults = ( resElId ) => {
    return {
        type: actionTypes.DELETE_RESULTS,
        resultElId: resElId
    };
};
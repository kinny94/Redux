export const INCREMENT      = 'INCREMENT';
export const DECREMENT      = 'DECREMENT';    
export const ADD            = 'ADD';  
export const SUBTRACT       = 'SUBTRACT';  
export const STORE_RESULTS  = 'STORE_RESULTS';    
export const DELETE_RESULTS = 'DELETE_RESULTS';    

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const add = ( value ) => {
    return {
        type: ADD,
        val: value
    };
};

export const subtract = ( value ) => {
    return {
        type: SUBTRACT,
        val: value
    };
};

export const saveResults = ( res ) => {
    return {
        type: STORE_RESULTS,
        result: res
    };
}

export const storeResults = ( res ) => {

    return dispatch => {
        setTimeout( () => {
            dispatch( saveResults( res ) );
        }, 2000 );
    }
};

export const deleteResults = ( resElId ) => {
    return {
        type: DELETE_RESULTS,
        resultElId: resElId
    };
};
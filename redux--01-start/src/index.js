import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import CounterReducer from './store/reducers/counter';
import ResultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    ctr: CounterReducer,
    res: ResultReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Middleware
const logger = store  => {
    return next => {
        return action => {
            console.log( '[ Middleware ] Dispatching', action );
            const result = next(action);
            console.log( '[ Mddileware ] next state', store.getState() );
            return result;
        }
    }
};

const store = createStore( rootReducer, composeEnhancers( applyMiddleware( logger, thunk ) ) );

//connecting the store to the react application
ReactDOM.render(<Provider store={ store } ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

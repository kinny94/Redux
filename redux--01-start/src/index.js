import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

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

const store = createStore( rootReducer );

//connecting the store to the react application
ReactDOM.render(<Provider store={ store } ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

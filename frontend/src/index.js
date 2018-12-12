import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// subscribe app to reducer/ store
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// keep as unregistered to work off of a port
serviceWorker.unregister();

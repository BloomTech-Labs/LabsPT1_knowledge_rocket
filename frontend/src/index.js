import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import rootReducer from './reducers';
import Register from './components/register';
import Login from './components/login';
import App from './components/App.js';
import Classes from './components/Classes.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// subscribe app to reducer/ store
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk, logger))
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="page-container">
                <Route exact path="/" component={App} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/classes" component={Classes} />
            </div>
        </Router>
    </Provider>
, document.getElementById('root'));

// keep as unregistered to work off of a port
serviceWorker.unregister();

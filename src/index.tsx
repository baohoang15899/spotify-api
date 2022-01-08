import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './storeConfig'
import './css/main.css'
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
        <Provider store={store}>
            <div className='wrapper'>
                <Router>
                    <App />
                </Router>
            </div>
        </Provider>,
    document.getElementById('root')
);


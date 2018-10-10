import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import { App } from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { initErrorLogger } from './lib/errorLogger';

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('root')
);

initErrorLogger();
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.less'
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <App/>
    , document.getElementById('root'));
serviceWorker.unregister();

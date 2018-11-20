import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
// import App from './containers/Demand';
import store from './redux/store'
import {addToCart} from './redux/actions/cart-action';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import promiseFinally from 'promise.prototype.finally'

console.log('index');
localStorage.setItem('userInfo', JSON.stringify({
    loginTime:'14:27 PM',
    userName:'Dejavu',
    isRoot: false
}));

store.dispatch(addToCart('Coffee 500gm', 1, 250));
// 引用finally
promiseFinally.shim();
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

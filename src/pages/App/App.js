import React, { Component } from 'react';
import {BrowserRouter, Router ,Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import createBrowserHistory from 'history/createBrowserHistory'
import Login from '../Login/login';
import Main from '../Main/main'
const history = createBrowserHistory();

const Home = props =>{
    const access_token = sessionStorage.getItem('access-token')|| '';
    // 未登录
    if(!access_token){
        return <Redirect to="/login"/>
    }else{
        return <Main {...props}/>
    }
};

const LoginPage = props => {
    return <Login {...props} />
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            auth : false,     // 表示是否认证通过
            hasAuthed: false  // 表示是否向服务器发送过认证请求
        };
    }

    getChildContext() {
        return {test: 'Login Out'};
    }

    render() {
        return (
            <BrowserRouter >
                <Switch>
                    <Route  exact path="/login" component={Login}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </BrowserRouter >
        );
    }

}
App.childContextTypes = {
    test: PropTypes.string
};
export default App;

import React, { Component } from 'react';
import MenuNav from '../../components/MeanNav/MeanNav'
import HeaderInfo from '../../components/Header'
import {Route, Redirect, Switch } from 'react-router-dom'
import { Layout,message} from 'antd';
import Loadable from 'react-loadable'
import {queryMenuTree} from '../../api/user-manage';

const { Header, Content, Sider } = Layout;

const loadingComponent = ({ isLoading, error }) => {
    // 路由进入前
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // 路由失败时
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

const User = Loadable({
    loader:() => import('../UserManage/user-manage'),
    loading: loadingComponent
});
const MainContent = Loadable({
    loader:() => import('../../components/MainContent/main-content'),
    loading: loadingComponent
});

const Charts = Loadable({
    loader:() => import('../../components/Chart/line'),
    loading: loadingComponent
});

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            auth : false,     // 表示是否认证通过
            hasAuthed: false,  // 表示是否向服务器发送过认证请求
            menus:[]  //左侧菜单列表
        }
    }

    componentDidMount(){
        this._queryMenuTree().then(res=>{
            let data = res.data;
            if(data.success){
                this.setState({
                    menus:data.rows||[]
                })
            }else{
                message.error('查询左侧菜单失败');
            }
        })
    }

    _queryMenuTree = (sessionKey) =>{
        return queryMenuTree({sessionKey})
    }

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    LoginOut = () => {
        this.props.history.push('/login');
    }

    renderElement = () => {
        return <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo" />
                <MenuNav history={this.props.history} menus={this.state.menus}/>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} >
                    <HeaderInfo LoginOut={this.LoginOut}/>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Route exact path="/user/list" component={User}/>
                        <Route exact path="/permission/list" component={MainContent}/>
                        <Route exact path="/role/list" component={Charts}/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    }

    render() {
        return (
            <div>
                {this.renderElement()}
            </div>
        );
    }

}

export default Main;

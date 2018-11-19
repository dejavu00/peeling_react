import React, { Component } from 'react';
import { Row, Col,Icon,Button } from 'antd';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux'
import {updateUserInfo} from '../redux/actions/user-action'
// @connect(
//     (state) => {
//         return ({
//             userInfo: state,
//         });
//     },
//     {updateUserInfo: updateUserInfo}
// )
function mapStateToProps(state) {
    return{
        userInfo:state.userInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({updateUserInfo:updateUserInfo},dispatch)
    }
}
function sayHello() {
    console.log(`当前登陆时间${(new Date).getSeconds()}`);
}
class Header extends Component {

    constructor(props){
        super(props);
        // this.getCur = _.debounce(sayHello,1000);
    }

    componentDidMount() {
        console.log('---------',this.props);
    }

    LoginOut= () => {
        this.getCur();
        // this.props.LoginOut()
    }

    render() {
        const userInfo = this.props.userInfo
        return (
            <header className="header" style={{padding:'0 15px'}}>
                <Row justify="space-between" type="flex" >
                    <Col span={8}>
                        <Col span={8}><Icon  theme="outlined"  type="user"/>{userInfo.userName}</Col>
                        <Col span={8}><Icon  theme="twoTone" twoToneColor="#eb2f96"  type="heart"/>{userInfo.isRoot?'管理员':'员工'}</Col>
                        <Col span={8}><Icon  theme="twoTone" type="smile"/>{userInfo.loginTime}</Col>
                    </Col>
                    <Col span={2}>
                        <Button  onClick={this.LoginOut} type="danger">
                            {this.context.test}
                        </Button>
                    </Col>
                </Row>
            </header>
        )
    }
}
Header.contextTypes  ={
    test: PropTypes.string
}
Header = connect(mapStateToProps,mapDispatchToProps)(Header)
export default Header

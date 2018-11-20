import React, { Component } from 'react';
import './user-manage.css'
import axios from 'axios'
import { Table,Button,Row, Col,Tag,message } from 'antd';
import AddUserDialog from '../../components/UserManage/add-user-dialog'
import {getUser} from "../../api/user-manage"
const columns = [{
    title:"登陆账号",
    dataIndex:"loginName",
    key:"loginName",
}, {
    title:"用户姓名",
    dataIndex:"name",
    key:"name",
}, {
    title:"用户状态",
    dataIndex:"statusStr",
    key:"statusStr",
    render:(statusStr)=>(<Tag color="#2db7f5">{statusStr}</Tag>)
},{
    title:"电话",
    dataIndex:"telphone",
    key:"telphone",
},{
    title:"邮箱地址",
    dataIndex:"email",
    key:"email",
}];
class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            _isMounted: true,
            data:[],
            pagination:{
                current:1,
                defaultPageSize:10
            }
        }
    }

    componentDidMount(){
        this.getUserData();
    }
    componentWillUnmount() {
        this._isMounted = false
    }
    getUserData = () => {
        this._isMounted = true;
        getUser('/user/query').then(res => {
            let data = res.data;
            if(data.success && this._isMounted){
                this.setState({
                    newData: data.rows||[],
                    pagination:{
                        current: 1,
                        defaultPageSize: data.total
                    }
                })
            }else{
                message.error(data.msg);
                sessionStorage.setItem('access-token','');
                this.props.history.push('/login');
            }
        })
    }

    handelPageChange = (page) => {
        getUser('/user/query').then(res => {
            let data = res.data;
            if (data.success) {
                this.setState({
                    newData: data.rows || [],
                    pagination: {
                        current: page,
                        defaultPageSize: data.total
                    }

                })
            }
        })

    };

    addUser = () => {
        // 显示子组件dialog
        this.addUserChild.showModal();
    };

    render() {
        return (
            <div className="main_content">
                <Row type="flex" justify="end">
                    <Col span={2}>
                        <Button type='primary' onClick={this.addUser}>添加客户</Button>
                    </Col>
                    <AddUserDialog  ref={ref => this.addUserChild = ref}/>
                </Row>
                <Table dataSource={this.state.newData}
                    pagination={this.state.pagination}
                    columns={columns}
                    rowKey={record => record.id}
                    onChange={this.handelPageChange}
                />
            </div>
        );
    }
}

export default Users;

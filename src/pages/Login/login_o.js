import React, {Component} from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import axios from 'axios'
import './login.css'
const FormItem = Form.Item;
class NormalLoginForm extends Component {

    state = {
        entId: '',
        loginName: '',
        password: ''
    };
    componentDidMount() {
        this.props.form.setFieldsValue({
            entId: 'qnsoft',
            loginName: 'root',
            password: 'wy123456'
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.get('http://localhost:5000/login/ajax').then(res => {
                    // 进行跳转
                    let data = res.data;
                    if(data.success){
                        sessionStorage.setItem('access-token',res.headers['access-token']);
                        message.success(data.msg);
                    }
                }).catch(err => {
                    console.log(err)
                }).finally(() => {
                    localStorage.setItem('userInfo', JSON.stringify({
                        loginTime: new Date().toLocaleTimeString(),
                        userName:'Dejavu',
                        isRoot: true
                    }));
                    this.props.history.push('/user/list');
                })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id="user-login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('entId', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="entId" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('loginName', {
                            rules: [{ required: true, message: 'Please input your loginName!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="loginName"  />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="Password"  />
                        )}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;

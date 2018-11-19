import React, {Component} from 'react'
import { Form, Input, Tooltip, Icon, Select, AutoComplete } from 'antd';
import axios from 'axios'
const FormItem = Form.Item;
const AutoCompleteOption = AutoComplete.Option;

const Option = Select.Option;
let RoleOptions = [];

class AddUserForm extends Component{
    state = {
        confirmDirty: false,
        roleList: [{
            id:'2',
            text: '无'
        }]
    };

    componentWillMount() {
        axios.post('http://localhost:8081/alm/role/queryAll').then((res) =>{

        }).catch(err => {
            this.setState({
                roleList: [{
                    id:'2',
                    text: '无'
                }, {
                    children: null,
                    description: '',
                    hasChildren: false,
                    id: '162',
                    name: '普通客服',
                    parentId: '1',
                    parentName: null,
                    state: null,
                    text: '普通客服'
                }]
            });
        })
    }

    componentDidMount() {
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate() {
    }

    componentDidUpdate(){
    }
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            console.log(values);
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 }
            }
        };

        const {roleList} = this.state;
        RoleOptions = roleList.length > 0? roleList.map(item =>
            <Option key={item.id}>{item.text}</Option>
        ):(<Option key="1">加载中...</Option>)
        console.log('RoleOptions', RoleOptions);

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="登陆账号"
                >
                    {getFieldDecorator('loginName', {
                        rules: [{
                            required: true, message: 'Please input your E-mail!'
                        }]
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="登陆密码"
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please input your password!'
                        }, {
                            validator: this.validateToNextPassword
                        }]
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="用户名"
                >
                    {getFieldDecorator('name', {
                        initialValue:'jjsjsjsjjs',
                        rules: [{
                            required: true, message: 'Please confirm your password!'
                        }]
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            电话&nbsp;
                            <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                >
                    {getFieldDecorator('telphone', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }]
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="邮箱地址"
                >
                    {getFieldDecorator('email', {
                        initialValue: ['Zhejiang', 'Hangzhou', 'West Lake'],
                        rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }]
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="角色"
                >
                    {getFieldDecorator('roleId', {
                        rules: [{ required: true, message: 'Please select your habitual roleId!' }]
                    })(
                        <Select
                            mode="tags"
                            style={{ width: '100%' }}
                            placeholder="Tags Mode"
                        >
                            {RoleOptions}
                        </Select>

                    )}
                </FormItem>
            </Form>
        );
    }
}
const WrappedAddUserForm = Form.create()(AddUserForm);
export default  WrappedAddUserForm;

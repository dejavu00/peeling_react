import React, { Component } from 'react';
import { Row, Col,Form, Input, Button  } from 'antd';
import InputWithUserName from './wrapWithLoadData'
import Post from './loadAndRefresh'
const FormItem = Form.Item;
const { TextArea } = Input;
class Lesson extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

// class TextAreaWithUserName extends Component {
//     render () {
//         return (
//             <div>
//                 <label htmlFor="loginTime">登录时间</label>
//                 <textarea id="loginTime"  value={this.props.data} autosize={{ minRows: 2, maxRows: 6 }} />
//             </div>
//         )
//     }
// }
// TextAreaWithUserName=HigerComponent(TextAreaWithUserName,'loginTime');
class RegistrationForm extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 3 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 21 },
                sm: { span: 21 },
            },
        };
        const { getFieldDecorator } = this.props.form;
        return (
            <Row type="flex" justify="center">
                <Col span={12}>
                    <form action="">
                        <InputWithUserName/>
                    </form>
                    <Post/>
                </Col>
            </Row>
        )
    }
}
const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default WrappedRegistrationForm

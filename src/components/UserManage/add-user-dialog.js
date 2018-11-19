import React, {Component} from 'react'
import {Modal} from 'antd';
import AddUserForm from './add-user-form'

class AddUser extends Component{

    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        confirmDirty: false,
        autoCompleteResult: []
    };
    componentDidMount() {
        // this.props.bindChild(this);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = (e) => {
        this.addUserForm.handleSubmit(e);
    };

    handleCancel = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        const { visible, confirmLoading } = this.state;
        return (
            <div>
                <Modal
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                    onOk={this.handleOk}
                    title="添加用户"
                    visible={visible}
                >
                    <AddUserForm bindForm={this.bindForm} wrappedComponentRef={(form) => this.addUserForm = form} />

                </Modal>
            </div>
        );
    }

}

export default AddUser;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'antd'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateUserInfo} from '../../redux/actions/user-action'
import { Select } from 'antd';
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


function mapStateToProps(state) {
    return{
        userInfo:state.userInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({upateUser:updateUserInfo},dispatch)
    }
}
class UpdateUser extends Component {

    static propTypes = {
        visible: PropTypes.string.isRequired
    };
    state = {
        modal2Visible: false,
    }

    updateUserInfo = () => {
        this.props.actions.upateUser({
            userName:'邓力',
            loginTime: new Date().toLocaleTimeString()
        })
    };
    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={() => this.setModal2Visible(true)}>
                    Vertically centered modal dialog
                </Button>
               <div classID="modal-box">

               </div>
            </div>

        );
    }
}
UpdateUser.defaultProps = {
    name: 'I am a protype'
};
UpdateUser.contextTypes  ={
    test: PropTypes.string
};

UpdateUser = connect(mapStateToProps,mapDispatchToProps)(UpdateUser);
export default UpdateUser;

import React, { Component} from 'react'
import WrapWithAjaxData from './wrapWithAjaxData'
const WrapWithLoadData = (OldComponent,name) => {
    class NewComponent extends Component{

        constructor () {
            super();
            this.state = { data: null }
        }

        componentWillMount(){
            let data = JSON.parse(localStorage.getItem('userInfo'))[name];
            // 在该周期函数中使用setState不会再出发render
            this.setState({
                data
            })
        }

        render(){
            return (
                <OldComponent data={this.state.data} />
            )
        }
    }
    return NewComponent;
};
class InputWithUserName extends Component {
    render () {
        return (
            <div>
                {this.props.data}
            </div>
        )
    }
}
// 需求是先从storage中获取数据，然后请求，此处 的顺序确实相反，先执行下面一行，然后上
// answer:相当于被包裹了，

InputWithUserName=WrapWithAjaxData(InputWithUserName);

InputWithUserName=WrapWithLoadData(InputWithUserName,'userName');

export default InputWithUserName;

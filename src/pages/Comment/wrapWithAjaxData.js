import React, { Component} from 'react'
const HignerComponent = (OldComponent,name) => {
    class NewComponent extends Component{

        constructor () {
            super();
            this.state = { data: null }
        }

        componentWillMount(){
            // 在该周期函数中使用setState不会再出发render
            setTimeout(()=>{
                let name = 'Data:' + this.props.data;
                this.setState({
                    data: name
                })
            },1000);

        }

        render(){
            return (
                <OldComponent data={this.state.data} />
            )
        }
    }
    return NewComponent;
};

export default HignerComponent;

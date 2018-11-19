import React,{Component} from 'react'
import {Button} from 'antd'
class Square extends Component{
    state ={
        value:''
    }

    render(){
        return(
            <Button onClick={() => this.props.onClick()}>
                {this.props.value}
            </Button>
        )
    }
}
export default Square
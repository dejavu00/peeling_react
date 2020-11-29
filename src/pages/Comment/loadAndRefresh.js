import React, {Component} from 'react'
const loadAndRefresh = (url) => (NewComponent) => {
    return  class extends Component{

        constructor(props){
            super(props);
            this.state = {
                content: '',
                refresh: '',
                text: '无'
            }
        }

        async refresh(){
            this.setState({
                content:`正在刷新${url}...`
            });
            await new Promise(resolve => {
                setTimeout(() => {
                    this.setState({
                        content:`刷新完毕了`
                    });
                    resolve('刷新完毕了')
                },1000);
            });
            this.setState({
                text:'有'
            })

        }

        //共有逻辑
        componentWillMount(){

        }

        render(){
            const propsData ={
                content:this.state.content,
                refresh:this.refresh.bind(this),
                text:this.state.text
            };
            return(
                <NewComponent {...propsData} />
            )
        }
    }
};
class Post extends Component {
    render () {
        return (
            <div>
                <p>{this.props.content}</p>
                <p>{this.props.text}</p>
                <button onClick={() => this.props.refresh()}>刷新</button>
            </div>
        )
    }
}
export default Post = loadAndRefresh('/post')(Post);

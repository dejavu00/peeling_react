import React, { Component } from 'react';
import {Tabs, Checkbox, Input  } from 'antd';
const TabPane = Tabs.TabPane;
class MainContent extends Component {

    state = {
        visible: '123',
        toDoList:{
            'all':[],
            'todo':[],
            'completed':[]
        }
    }

    addUser = () => {
        this.setState({
            visible: 'asdfsafsa'
        })
    }

    onChange= (e) => {
        console.log(e.target.checked)
    }

    fillForm(type,e) {
        const tempList = this.state.toDoList[type];
        const allList = this.state.toDoList['all'];
        debugger
        switch (type) {
        case 'all': {
            tempList.push(e.target.value);
            this.setState({
                'all':tempList
            });
            break;
        }
        case 'todo': {
            allList.push(e.target.value);
            tempList.push(e.target.value);
            this.setState({
                'all': allList,
                [type]: tempList
            });
            break;
        }
        default:
            allList.push(e.target.value);
            tempList.push(e.target.value);
            this.setState({
                'all': allList,
                [type]: tempList
            });
            break;
        }
    }

    render() {
        const {all,todo,completed} = this.state.toDoList;
        return (
            <div className="main_content">
                <div className="card-container">
                    <Tabs type="card">
                        <TabPane tab="全部任务" key="1">
                            <div className="todo-show">
                                {all.map(item => {
                                    return(
                                        <p className="todo-item" key={Math.random()}>
                                            <Checkbox onChange={this.onChange}>
                                                {item}
                                            </Checkbox>
                                        </p>
                                    )
                                })}
                            </div>
                            <div className="todo-input">
                                <Input placeholder="What do you have to do?" onChange={this.fillForm.bind(this,'all')}/>
                            </div>
                        </TabPane>
                        <TabPane tab="代办任务" key="2">
                            <div className="todo-show">
                                <div className="todo-show">
                                    {todo.map(item => {
                                        return(
                                            <p className="todo-item" key={Math.random()}>
                                                <Checkbox onChange={this.onChange}>
                                                    {item}
                                                </Checkbox>
                                            </p>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="todo-input">
                                <Input placeholder="What do you have to do?" onChange={this.fillForm.bind(this,'todo')}/>
                            </div>

                        </TabPane>
                        <TabPane tab="已完成任务" key="3">
                            <div className="todo-show">
                                <div className="todo-show">
                                    {completed.map(item => {
                                        return(
                                            <p className="todo-item" key={Math.random()}>
                                                <Checkbox onChange={this.onChange}>
                                                    {item}
                                                </Checkbox>
                                            </p>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="todo-input">
                                <Input placeholder="What do you have to do?" onChange={this.fillForm.bind(this,'completed')}/>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default MainContent;

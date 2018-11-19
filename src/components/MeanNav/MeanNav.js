import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
const SubMenu = Menu.SubMenu
class MeanNav extends Component {

    static propTypes = {
        menus: PropTypes.array.isRequired
    }

    constructor(props){
        super(props)
        this.state = {
            theme: 'dark',
            current: '1'
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    renderMeans = () => {
        return this.props.menus.map(item =>
            <SubMenu key={item.id} title={<span><Icon type="setting"  /><span>{item.name}</span></span>}>
                {
                    item.hasChildren?item.children.map(sub =>
                        <Menu.Item key={sub.actionUrl}>
                            <Link to={sub.actionUrl}>{sub.name}</Link>
                        </Menu.Item>
                    ):''
                }
            </SubMenu>
        )
    }

    render() {
        const pathname = this.props.history.location.pathname;
        return (
            <Menu
                className="menu-nav"
                theme={this.state.theme}
                onClick={this.handleClick}
                defaultSelectedKeys={[pathname]}
                defaultOpenKeys={['2']}
                mode="inline"
            >
                {
                    this.props.menus.map(item =>{
                        if(item.hasChildren){
                            return (
                                <SubMenu key={item.id} title={<span><Icon type="setting"  /><span>{item.name}</span></span>}>
                                    {
                                        item.hasChildren?item.children.map(sub =>
                                            <Menu.Item key={sub.actionUrl}>
                                                <Link to={sub.actionUrl}>{sub.name}</Link>
                                            </Menu.Item>
                                        ):''
                                    }
                                </SubMenu>
                            )
                        }
                        return  <Menu.Item key={item.actionUrl}>
                            <Link to={item.actionUrl}>{item.name}</Link>
                        </Menu.Item>

                    }
                    )
                }
            </Menu>
        )
    }
}

export default MeanNav

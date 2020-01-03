import React, { Component } from 'react';

import { NavLink} from "react-router-dom";
import { Menu,Layout} from 'antd';
const { Header } = Layout;


import './style/header.css';


class Nav extends Component{


  
  render(){
    return(
  
      <div>
      <Layout className="layout">
        <Header>
          
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            
            <Menu.Item key="1"><NavLink to="/">Home</NavLink></Menu.Item>
    
            <Menu.Item key="2"><NavLink to="/contact">contact us</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to="/about">about us</NavLink></Menu.Item>
            <Menu.Item key="4"><NavLink to="/sign">sign in </NavLink></Menu.Item>
            <Menu.Item key="5"><NavLink to="/login">log in </NavLink></Menu.Item>
          </Menu>
        </Header>
     
        </Layout>
    
        </div>
    )
  }
}

export default Nav;
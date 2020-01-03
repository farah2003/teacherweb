import React, { Component } from 'react';


import './style/header.css';
import { Menu,Layout} from 'antd';
const { Header } = Layout;

class SNav extends Component{
  render(){
    return(
      <div className="Nav">
      <Layout className="layout">
        <Header>
          
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            
            <h3>welcome</h3>
          </Menu>
        </Header>
     
        </Layout>
      </div>
    )
  }
}

export default SNav;
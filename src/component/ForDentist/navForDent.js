import React, { Component } from 'react';

import { Menu,Layout,Icon} from 'antd';


import './stylefordent/navfar.css'

import './profileDent'
const { Header } = Layout;


  
class DNav extends Component{
  
  move=()=>{

    this.props.history.push('./profileDent')
   }
   

 

  render(){
    console.log(this.props)

    return(
      <div className="Nav">
       
       <div>
  <Layout className="layout">
    <Header>
      
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        
        <Menu.Item key="profile">
        <Icon type="user" >
        <a href="https://" target="_blank" rel="noopener noreferrer"/>
        </Icon>
        </Menu.Item>

       
      </Menu>
    </Header>
 
    </Layout>

    </div>
     

        
      </div>
    )
  }
}

export default DNav;
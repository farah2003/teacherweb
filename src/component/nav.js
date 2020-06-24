import React, { Component } from 'react';

import { NavLink} from "react-router-dom";
import { Menu,Layout} from 'antd';

import darkTheme from '@ant-design/dark-theme'

import './style/header.css';

const { Header } = Layout;
class Nav extends Component{


  
  render(){
    return(
  
      <div>
      <Layout className="layout">
        <Header style={{ background: darkTheme , width:'100%',height:115}}>
          <div style={{float:'left',marginTop:20}}>
            <label className="Label" style={{marginLeft:120 ,marginTop:40,color:'white',fontFamily: 'Satisfy',fontSize:50}}>Dent Guide</label>
          </div>
          <div style={{float:'right'}}>
          <Menu
            theme={"dark"}
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '115px'}}
          >
        
            <Menu.Item key="1"  style={{width:170}}><NavLink to="/" style={{fontSize:'25',textAlign:'center',fontWeight:'bold'}}>Home</NavLink></Menu.Item>
    
            <Menu.Item key="2"  style={{width:170}}><NavLink to="/contact"  style={{fontWeight:'bold',fontSize:'30',textAlign:'center'}}>contact us</NavLink></Menu.Item>
            <Menu.Item key="3"  style={{width:170}}><NavLink to="/about"  style={{fontWeight:'bold',fontSize:'25',textAlign:'center'}}>about us</NavLink></Menu.Item>
            <Menu.Item key="4"  style={{width:170}}><NavLink to="/sign"  style={{fontWeight:'bold',fontSize:'25',textAlign:'center'}}>sign in </NavLink></Menu.Item>
            <Menu.Item key="5"  style={{width:170}}><NavLink to="/login"  style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> log in </NavLink></Menu.Item>
         
          </Menu>
          </div>
        </Header>
     
        </Layout>
    
        </div>
    )
  }
}

export default Nav;
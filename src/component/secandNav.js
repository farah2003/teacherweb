import React, { Component } from 'react';
import darkTheme from '@ant-design/dark-theme'


import './style/header.css';
import {Layout} from 'antd';
const { Header } = Layout;

class SNav extends Component{
  render(){
    return(
      <div className="Nav">
      <Layout className="layout">
        <Header style={{ background: darkTheme , width:'100%',height:60}}  > 
          
         <h1 style={{color:'white'}}>Fill in</h1>
        </Header>
     
        </Layout>
      </div>
    )
  }
}

export default SNav;
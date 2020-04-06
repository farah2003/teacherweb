import React, { Component } from 'react';


import './style/header.css';
import {Layout} from 'antd';
const { Header } = Layout;

class SNav extends Component{
  render(){
    return(
      <div className="Nav">
      <Layout className="layout">
        <Header>
          
         <h1 style={{color:'white'}}>welcome</h1>
        </Header>
     
        </Layout>
      </div>
    )
  }
}

export default SNav;
import React, { Component } from 'react';

import { Tabs,Button } from 'antd';


import DNav from './navForDent'
import './stylefordent/main.css'

import './page2'

const { TabPane } = Tabs;

class Profile extends Component{


  render(){
    return(
      
    
     
   
  <div className="card-container">
    <DNav {...this.props}></DNav>
    <h1>pr</h1>
      </div>


      
      
  
    )
  }
}

export default Profile;

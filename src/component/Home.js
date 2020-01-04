import React, { Component } from 'react';
import { Button ,Card} from 'antd';

import { NavLink} from "react-router-dom";
import './style/home.css'
import './fillin'
import Nav from './nav'

class  Home extends Component{


 move=()=>{

  this.props.history.push('./fillin')
 }
 
  render(){

    return(
      <div>
        <Nav></Nav>
        <div className="container">
       
      </div>
      <div className="container1">
      <NavLink to="/fillin">   <Button type="primary" onClick={this.move} style={{width:100}}> fillin </Button></NavLink> 
     
      </div>

      
        
      </div>
      
    )
  }
}

export default Home ;

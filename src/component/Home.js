import React, { Component, Im } from 'react';
import { Button ,Card,Layout,Icon, Carousel} from 'antd';

import { NavLink} from "react-router-dom";
import './style/home.css'
import './fillin'
import Nav from './nav'
const { Footer } = Layout;
class  Home extends Component{


 move=()=>{

  this.props.history.push('./fillin')
 }
 
  render(){

    return(
      <div>
        <Nav></Nav>
       

       </div>
      
    )
  }
}

export default Home ;

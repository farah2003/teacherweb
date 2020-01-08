import React, { Component } from 'react';
import { Button ,Card,Layout,Icon} from 'antd';

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
       
        <div style={{marginTop:0}}> <img style={{marginTop:0}}   src={require("../den1.jpg")} /></div>
   
     
      <div className="container1">
      <NavLink to="/fillin">   <Button type="primary" onClick={this.move}className="b"> fillin </Button></NavLink> 
     
      </div>
      <Footer style={{backgroundColor:'#01020e',height:'300px'}}>
        <div style={{padding:20}}>
       <h2 style={{color:'white'}}>Contact us</h2>
       <a  href='https://mail.google.com/mail/u/1/#inbox'><Icon type="mail" style={{fontSize:24}} /><label  style={{ color: 'white' ,fontSize:21 }} > fg gsgf@gmail.com</label></a>


        </div>
        <div style={{paddingLeft:20 }}>
       
     <a>  <Icon type="phone" style={{ fontSize:30}} /><label  style={{ color: 'white' ,fontSize:21 }} > 0000000000</label></a>


        </div>
      

      </Footer>

      
        
      </div>
      
    )
  }
}

export default Home ;

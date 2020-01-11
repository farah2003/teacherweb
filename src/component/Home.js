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
       
        <div >
          
     

        <Carousel autoplay>
    <div className="slider">


    <div>
    <img src={require("../component/dental.jpg")} style={{width:'100%', height:500, marginTop:0}}/> 
    </div>

    </div>
    <div>
    <img src={require("../component/dental.jpg")} style={{width:'100%', height:500, marginTop:0}}/> 
    </div>

    <div>
    <img src={require("../component/dental.jpg")} style={{width:'100%', height:500, marginTop:0}}/> 
    </div>

    <div>
    <img src={require("../component/dental.jpg")} style={{width:'100%', height:500, marginTop:0}}/> 
    </div>

  </Carousel>
  <div style={{ backgroundColor:'#ffffff', height:200}}>
    <div style={{marginLeft:340,paddingTop:30}}>
    <h1 style={{ color:'#3742fa'}}> <Icon type="down-square" /> YOU CAN SEND YOUR STATE FROM HERE <Icon type="down-square" /> </h1>
    </div>
  
  <div style={{marginLeft:550, paddingTop:20 }}>
  <NavLink to="/fillin">   <Button  style={{width:200, height:60}} onClick={this.move} ghost> <h2 style={{fontFamily:'AdventPro-Bold	', color:'#70a1ff'}}> Fill In </h2>  </Button></NavLink> 
  </div>
      </div>
      <div>
        {console.log("helooooo")}
      </div>










        </div>
   
     

      <Footer style={{backgroundColor:'#01020e',height:'300px'}}>
        <div style={{padding:20}}>
       <h2 style={{color:'white'}}>Contact us</h2>
       <a  href='https://mail.google.com/mail/u/1/#inbox'><Icon type="mail" style={{fontSize:24}} /><label  style={{ color: 'white' ,fontSize:21 }} > dentist4@gmail.com</label></a>


        </div>
        <div style={{paddingLeft:17}}>
       
     <a>  <Icon type="phone" style={{ fontSize:30}} /><label  style={{ color: 'white' ,fontSize:21 }} > 0321312000000</label></a>
     


        </div>

        <div style={{paddingLeft:17, padding:15}}>
       
     <a href='https://www.facebook.com/karam.hillis'>  <Icon type="facebook" style={{ fontSize:30}} /><label  style={{ color: 'white' ,fontSize:21 }} >  Karam Hillis</label></a>
     


        </div>
        <div style={{paddingLeft:30, padding:15}}>
       
       <a href='http://facebook.com/profile.php?id=100025261596847'>  <Icon type="facebook" style={{ fontSize:30}} /><label  style={{ color: 'white' ,fontSize:21 }} >  Farah Shaquora </label></a>
       
       
       <label  style={{ color: 'white' ,fontSize:21, paddingLeft:200, paddingTop:400 }} >  Gaza Strip </label>

       <label  style={{ color: 'white' ,fontSize:21, paddingLeft:200, paddingBottom:100 }} >  Gaza Strip
       901 Boxnorth west
        </label>


          </div>
        
            
            
          

      

      </Footer>

      
        
      </div>
      
    )
  }
}

export default Home ;

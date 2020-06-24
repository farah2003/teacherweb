import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import { Menu,Layout,Input,Icon} from 'antd';

import * as firebase from 'firebase'
import './stylefordent/main.css'
import './profileDent'
import PCard from './allpage'

const { Header } = Layout;
const{Search}=Input;


class DHome extends Component{




  componentWillMount(){
    let  user = firebase.auth().currentUser;
  console.log(user)
  
  }

    move1=()=>{
      let  user = firebase.auth().currentUser;
      console.log(user)
        this.props.history.push('./profileDent')
       }
  render(){
    return( 
     <div >
           <div style={{height:60,width:"100%",marginTop:0,backgroundColor:"#001a33"}}>
        <div style={{paddingTop:18,float:"right",marginRight:70}}>
         <Icon  type="user" 
         onClick={this.move1}
         style={{ color: 'white',fontSize: '28px',paddingTop:0,marginRight:36 }} />
         <Icon  type="setting" style={{fontSize: '27px', color: 'white' }} />
          </div>
          <div>
          <label className="Label" style={{marginLeft:120 ,paddingTop:60,color:'white',fontFamily: 'Satisfy',fontSize:30}}>Dent Guide</label>
          </div>
        
        </div>
{/*<Header style={{ background: ' rgb(0, 151, 221)',marginTop: 0,position:"fixed",width:'100%' }}>
            <Icon 
              className="trigger"
              type="user" 
              onClick={this.move1}
              style={{ fontSize: '30px', color: 'black' ,width:100 }}
            
            />
          </Header>
          <nav >
              <img alt="img" style={{marginLeft:0,marginTop:63,width:400,height:320,position:'fixed',marginBottom:500}}src={require("../den1.jpg")} />

          </nav>
          <h1>fh fgn</h1>
          <h1>fh fgn</h1>
          <h1>fh fgn</h1>
          <h1>fh fgn</h1>
          <h1>fh fgn</h1>
         
        
          <h1>fh fgn</h1>
       
    */}
         
          <div style={{borderTop:"1px solid #f2f2f2"}}></div>

          <div style={{float:'left',width:'100%'}}>
        <div style={{float:'right',marginTop:23,marginRight:35}}>
          <Search  style={{width:380}}size='large'  placeholder="input search text" onSearch={value => console.log(value)} enterButton />
          </div>
          <div>
          <Menu
           
            mode="horizontal"
            id="navbar"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '80px'}}
          >
        
            <Menu.Item key="1"  style={{width:120}}><NavLink to='/ForDentist/allpage' style={{fontWeight:'bold',fontSize:'25',textAlign:'center'}}>All</NavLink></Menu.Item>
    
            <Menu.Item key="2"  style={{width:120}}><NavLink to='/ForDentist/page1'   style={{fontWeight:'bold',fontSize:'25',textAlign:'center'}}>Orthodontics</NavLink></Menu.Item>
            <Menu.Item key="3"  style={{width:120}}><NavLink to='/ForDentist/page2'  style={{fontWeight:'bold',fontSize:'25',textAlign:'center'}}> nerve treatment</NavLink></Menu.Item>
            <Menu.Item key="4"   style={{width:120}}><NavLink to='/ForDentist/page3'   style={{fontWeight:'bold',fontSize:'25',textAlign:'center'}}>Denture  </NavLink></Menu.Item>
            <Menu.Item key="5"style={{width:120}}><NavLink to='/ForDentist/page4' style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> Molar filling</NavLink></Menu.Item>
            <Menu.Item key="6" style={{width:120}}><NavLink to='/ForDentist/page5'   style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}>tooth removal  </NavLink></Menu.Item>
            <Menu.Item key="7"  style={{width:120}}><NavLink to='/ForDentist/page6'   style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}>   Cleaning teeth </NavLink></Menu.Item>
          </Menu>
          </div>
          </div>

   




  </div>




      
      
  
    )
  }
}

export default DHome;

import React, { Component } from 'react';

import { Tabs,Button, Icon,Card } from 'antd';

import { NavLink} from "react-router-dom";
import { Menu,Layout,Input} from 'antd';



import DNav from './navForDent'
import './stylefordent/main.css'
import './profileDent'

const { Header } = Layout;
const{Search}=Input;


class DHome extends Component{

  





    move1=()=>{
        console.log('nav')
        this.props.history.push('./profileDent')
       }
  render(){
    return( 
     <div >

<Header style={{ background: ' rgb(0, 151, 221)',marginTop: 0,position:"fixed",width:'100%' }}>
            <Icon style={{width:100}}
              className="trigger"
              type="user" 
              onClick={this.move1}
              style={{ fontSize: '30px', color: 'black'  }}
            
            />
          </Header>
          <nav >
              <img  style={{marginLeft:0,marginTop:63,width:400,height:320,position:'fixed',marginBottom:500}}src={require("../den1.jpg")} />

          </nav>
          <h1>fh fgn</h1>
          <h1>fh fgn</h1>
          <h1>fh fgn</h1>
          <h1>fh fgn</h1>
          <h1>fh fgn</h1>
         
        
          <h1>fh fgn</h1>
       
         {/* <h4>gh gfhjdgjhn</h4> */}
         
          

          <div style={{float:'left',width:'100%',position:'fixed'}}>
        <div style={{float:'right',marginTop:23,marginRight:35}}>
          <Search  style={{width:380}}size='large'  placeholder="input search text" onSearch={value => console.log(value)} enterButton />
          </div>
          <div className="menuscroll">
          <Menu
           
            mode="horizontal"
            id="navbar"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '80px',color:'red'}}
          >
        
            <Menu.Item key="1"  style={{width:120}}><NavLink to='/ForDentist/a' style={{fontWeight:'bold',fontSize:'25',textAlign:'center'}}>الكل</NavLink></Menu.Item>
    
            <Menu.Item key="2"  style={{width:120}}><NavLink to='/ForDentist/page1'   style={{fontWeight:'bold',fontSize:'25',textAlign:'center'}}>تلبيسة</NavLink></Menu.Item>
            <Menu.Item key="3"  style={{width:120}}><NavLink to='/ForDentist/page2'  style={{fontWeight:'bold',fontSize:'25',textAlign:'center'}}>علاج عصب</NavLink></Menu.Item>
            <Menu.Item key="4"   style={{width:120}}><NavLink to='/ForDentist/page3'   style={{fontWeight:'bold',fontSize:'25',textAlign:'center'}}>طقم اسنان  </NavLink></Menu.Item>
            <Menu.Item key="5"style={{width:120}}><NavLink to='/ForDentist/page4' style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> حشوالاضراس</NavLink></Menu.Item>
            <Menu.Item key="6" style={{width:120}}><NavLink to='/ForDentist/page5'   style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> خلع  </NavLink></Menu.Item>
            <Menu.Item key="7"  style={{width:120}}><NavLink to='/ForDentist/page6'   style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> تنظيف اسنان </NavLink></Menu.Item>
          </Menu>
          </div>
          </div>

   






  </div>




      
      
  
    )
  }
}

export default DHome;

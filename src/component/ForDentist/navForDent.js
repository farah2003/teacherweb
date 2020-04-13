import React, { Component } from 'react';

import {Layout,Icon} from 'antd';


import './stylefordent/navfar.css'


import './profileDent'
const { Header } = Layout;


  
class DNav extends Component{
  
  move1=()=>{
    console.log('nav')
    this.props.history.push('./profileDent')
   }


 

  render(){
    console.log(this.props)

    return(
      <div  style={{position:"fixed",marginTop:0}}>
       
     
         
<Layout>

<Header style={{ background: ' #3366ff',marginTop: 0,position:"fixed",width:'100%' }}>
            <Icon 
              className="trigger"
              type="user" 
              onClick={this.move1}
              style={{ fontSize: '30px', color: 'black' ,width:100 }}
            
            />
          </Header>


  
 
    </Layout>

   </div>

        
    
    )
  }
}

export default DNav;
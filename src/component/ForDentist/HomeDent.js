import React, { Component } from 'react';

import { Tabs,Button } from 'antd';


import DNav from './navForDent'
import './stylefordent/main.css'

import './profileDent'

const { TabPane } = Tabs;

class DHome extends Component{
  move1=()=>{
    console.log('nav')
    this.props.history.push('./profileDent')
   }

  render(){
    return(
      
      <div>
     
     <scrollable>
  
  <div className="card-container">
    <DNav {...this.props}></DNav>
<Tabs type="card" size="large" style={{height:400}}tabBarStyle={{backgroundColor:''}} >
 
<TabPane tab="Tab Title 1" key="1" size="large"   >

  </TabPane>

 
  <TabPane tab="Tab Title 2" key="2"  style={{color:'red'}}>
 
  </TabPane>

  <TabPane tab="Tab Title 3" key="3"  >
 
  </TabPane>

</Tabs>
</div>







  </scrollable>

      </div>


      
      
  
    )
  }
}

export default DHome;

import React, { Component ,Button} from 'react';


import PCard from './allpage'

import DNav from './navForDent'
import './stylefordent/main.css'
import { Tabs } from 'antd';

import './page1'
import './page2'
import './allpage'

const { TabPane } = Tabs;
class Mainfordent extends Component{



 state={
   list:[]
 }
 move1=()=>{
  this.props.history.push('./page1')
 }
 move2=()=>{
  this.props.history.push('./page2')


}

move3=()=>{
  this.props.history.push('./allpage')
 }



  render(){
    console.log('mainnnnnnnnnnnn')
  //  console.log(this.props)

    return(
      <scrollable>
  
      <div className="card-container">
    <Tabs type="card">
     
    <TabPane tab="Tab Title 1" key="1" >
      <Button >
        <p>Content of Tab Pane 1</p>
        </Button>
      </TabPane>
   
     
      <TabPane tab="Tab Title 2" key="2" >
      <Button   >
        <p>Content of Tab Pane 2</p>
        </Button>
      </TabPane>
   
      <TabPane tab="Tab Title 3" key="3" >
      <Button   >
        <p>Content of Tab Pane 3</p>
        </Button>
      </TabPane>
   
    </Tabs>
  </div>
 

  


      <DNav {...this.props}></DNav>

      <PCard></PCard>
      </scrollable>
      
  
    )
  }
}

export default Mainfordent;
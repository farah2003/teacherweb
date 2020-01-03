import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PCard from './allpage'

import DNav from './navForDent'
import './stylefordent/main.css'
import { AppBar,Tabs,Tab} from '@material-ui/core';
import './page1'
import './page2'
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



  render(){
    return(
      <scrollable>
         
      <div className="mainDiv">
     
     
      </div>
      <div >
        <AppBar position="static" color="default">

          <Tabs
            value={'farah'}
            onChange={this.change}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
               <Tab label="الكل"  />
            <Tab label="خلع"  onClick={this.move1}/>
            <Tab label="تسوس اسنان" onClick={this.move2} />
            <Tab label="تراكيب"  />
            <Tab label="Item four"  />
            <Tab label="Item Five"/>
          </Tabs>
        </AppBar>
     
         
        </div>

  


      <DNav></DNav>

      <PCard></PCard>
      </scrollable>
      
  
    )
  }
}

export default Mainfordent;
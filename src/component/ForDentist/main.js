import React, { Component } from 'react';


import PCard from './allpage'

import DNav from './navForDent'
import './stylefordent/main.css'
import { AppBar,Tabs,Tab} from '@material-ui/core';
import './page1'
import './page2'
import './allpage'
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

  //  console.log(this.props)

    return(
      <scrollable>
         
      <div className="mainDiv">
     
     
      </div>
      <div >
        <AppBar position="static" color="default">

          <Tabs
           
            onChange={this.change}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
               <Tab label="الكل"  onClick={this.move3}/>
            <Tab label="خلع"  onClick={this.move1}  />
            <Tab label="تسوس اسنان" onClick={this.move2} />
            <Tab label="تراكيب"  />
            <Tab label="Item four"  />
            <Tab label="Item Five"/>
          </Tabs>
        </AppBar>
     
         
        </div>

  


      <DNav {...this.props}></DNav>

      <PCard></PCard>
      </scrollable>
      
  
    )
  }
}

export default Mainfordent;
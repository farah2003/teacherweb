import React, { Component } from 'react';

import * as firebase from 'firebase'
import { Button } from '@material-ui/core';
import DNav from './navForDent'
import './stylefordent/main.css'
import { AppBar ,Toolbar, Typography,Tabs,Tab,IconButton,InputBase} from '@material-ui/core';
import './pageTabs/page1'

class Mainfordent extends Component{
 state={
   list:[]
 }
 move1=()=>{
  this.props.history.push('./pageTabs/page1')
 }
 move2=()=>{
  this.props.history.push('./pageTabs/page1')

}

  componentWillMount(){
    const db = firebase.firestore();

    db.collection("Users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var l =[]
          l.push(doc.data().UsersName)
          this.setState({
            list:l
          })
          
            console.log(`${doc.id} => ${doc.data().UsersName}`);
            console.log(this.state.list)
        });
    });

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
            <Tab label="خلع"  onClick={this.move1}/>
            <Tab label="تسوس اسنان" onClick={this.move2} />
            <Tab label="تراكيب"  />
            <Tab label="Item four"  />
            <Tab label="Item Five"/>
          </Tabs>
        </AppBar>
        <div>
            <p>fgjkhslgfh;hgfhgjestkljerbyerh e
                vkn df
                fh fjhgkf 
                g dghjf 
                f rthjherlgkjhegjhkdgj herjwelfjdnfdngdfnmg,sdgreulhlg nm</p>
                <p>fgjkhslgfh;hgfhgjestkljerbyerh e
                vkn df
                fh fjhgkf 
                g dghjf 
                f rthjherlgkjhegjhkdgj herjwelfjdnfdngdfnmg,sdgreulhlg nm</p>
                <p>fgjkhslgfh;hgfhgjestkljerbyerh e
                vkn df
                fh fjhgkf 
                g dghjf 
                f rthjherlgkjhegjhkdgj herjwelfjdnfdngdfnmg,sdgreulhlg nm</p>
                <p>fgjkhslgfh;hgfhgjestkljerbyerh e
                vkn df
                fh fjhgkf 
                g dghjf 
                f rthjherlgkjhegjhkdgj herjwelfjdnfdngdfnmg,sdgreulhlg nm</p>
                <p>fgjkhslgfh;hgfhgjestkljerbyerh e
                vkn df
                fh fjhgkf 
                g dghjf 
                f rthjherlgkjhegjhkdgj herjwelfjdnfdngdfnmg,sdgreulhlg nm</p>
        </div>
         
        </div>

   



      <DNav></DNav>
      </scrollable>
      
  
    )
  }
}

export default Mainfordent;

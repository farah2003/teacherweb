import React, { Component } from 'react';

import * as firebase from 'firebase'
import PCard from './allpage'

import DNav from './navForDent'
import './stylefordent/main.css'

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
   <DNav></DNav>
      </scrollable>
      
  
    )
  }
}

export default Mainfordent;
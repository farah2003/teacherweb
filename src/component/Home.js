import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './style/home.css'
import './fillin'

import * as firebase from 'firebase'


class  Home extends Component{
  componentWillMount(){
    firebase.auth().signInWithEmailAndPassword('farah@gmail.com', 'paswword').catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
// componentDidMount(){
 // var db = firebase.firestore();
 ///   db.collection("users").get().then((querySnapshot) => {
   //   querySnapshot.forEach((doc) => {
   ///       console.log(`${doc.id} => ${doc.data()}`);
   ///   });
 // });
 // }
 move=()=>{
  this.props.history.push('./fillin')
 }
 
  render(){

    return(
      <div>
        <div className="container">
       
      </div>
      <div className="container1">
      <Button variant="contained" color="primary" className="fillin" onClick={this.move}>fill in</Button>
      </div>
      <Button onClick={this.fire}> fdghnfdgz</Button>
        
      </div>
      
    )
  }
}

export default Home ;

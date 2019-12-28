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
 fire=()=>{
  var db = firebase.firestore();
  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

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

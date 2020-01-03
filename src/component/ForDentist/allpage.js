import React, { Component } from 'react';

import * as firebase from 'firebase'
import './stylefordent/allpage.css'
import Mainfordent from './main'
export default class PCard  extends  Component{
  state={
    name:'',
    phone:'',
    age:'',
    email:'',
    notes:'',
    disease:'',
    defaultChecked:'',
    id:''

  }
  print=()=>{
    const db = firebase.firestore();

    db.collection("patients").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            name:`${doc.id} => ${doc.data().Name}`
          })
          this.setState({
            age:`${doc.id} => ${doc.data().Age}`
          })
          this.setState({
            email:`${doc.id} => ${doc.data().Email}`
          })
          this.setState({
            phone:`${doc.id} => ${doc.data().Phone}`
          })
          this.setState({})
          this.setState({})
          
        });

    });
    console.log(this.state.name)
  }

render(){
  const{name,age,phone}=this.state
  return (
    <div className="continer">
      <Mainfordent  {...this.props}></Mainfordent>
    <div className="paper">
      
        <div   >
  
    </div>
    <button onClick={this.print}>vbvbs</button>

    </div >
  </div>
  );
}}
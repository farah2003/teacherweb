import React, { Component } from 'react'; 

import {Button,Input} from '@material-ui/core';

import PasswordField from 'material-ui-password-field'
import './ForDentist/main'

import * as firebase from 'firebase'
import './style/sign.css'


class Signin extends Component{
  state={
    name:"",
    FullName:"",
    PhoneNum:"",
    email:"",
    password: ""
  }
  addEmail=(e)=>{

    this.setState({
      email:e.target.value
    })
  }
  addName=(e)=>{
    this.setState({
      name:e.target.value
    })
   
    

  }
  addFullName=(e)=>{
    this.setState({
      FullName:e.target.value
    })

  }
  addNumber=(e)=>{
    this.setState({
      PhoneNum:e.target.value
    })
    

  }
  addPassword=(e)=>{
    this.setState({
      password:e.target.value
    })
    

  }
  
  fire=()=>{
    var firstN=this.state.name;
    var lastN=this.state.FullName;
    var PhoneNum=this.state.PhoneNum;
    var email=this.state.email
    var password=this.state.password

    const db = firebase.firestore();


    firebase.auth().createUserWithEmailAndPassword(email,
     password).catch(function (error) {
        // Handle Errors here.
 
        // ...
    }).then(function(){
    db.collection("Users").add({
        Name: firstN,
       UsersName: lastN,
        phone: PhoneNum,
        Email:email,
        Password:password,

    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    })
    .then(
      this.props.history.push('./ForDentist/main')
    )

   
  
  }
 

    
    
   
  
  
 




  render(){
    return(
      <div className="Container">
      <div>
          <h1>signing Up as Docoter</h1>


          <h3>  Full name  </h3>
          <Input  id="filled-basic" label="Your Full name" variant="filled"  onChange={this.addName}/>

          <h3>  User Name </h3>
          <Input  id="filled-basic" label="Your User Name" variant="filled"  onChange={this.addFullName}/>
          <h3> Your Email</h3>
          <Input  id="filled-basic" label="Enter your Email" variant="filled" onChange={this.addEmail} />

          <h3> Password </h3>
          <PasswordField
             hintText="At least 8 characters"
            floatingLabelText="Enter your password"
           errorText="Your password is too short"
           onChange={this.addPassword}
        />

          <h3> Your Phone Number</h3>
          <Input id="filled-basic" label="Enter your Phone Number" variant="filled" onChange={this.addNumber} />


        </div>
        <div> <Button variant="contained" color="primary"className="submitbutton" onClick={this.fire}>Submit</Button> </div>





      </div>
    )
  }
}

export default Signin ;

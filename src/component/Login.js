import React, { Component } from 'react';

import {Button,Input} from '@material-ui/core';

import PasswordField from 'material-ui-password-field'

import * as firebase from 'firebase'
import './sign'
import './ForDentist/main'

class Login extends Component{
  state={
    email:"",
    password: ""
  }
  addEmail=(e)=>{

    this.setState({
      email:e.target.value
    })
  }
  addPassword=(e)=>{
    this.setState({
      password:e.target.value
    })
    

  }
  login=()=>{

    var email=this.state.email
    var password=this.state.password

    
    firebase.auth().signInWithEmailAndPassword(email,
      password).catch(function (error) {
         // Handle Errors here.
         var error = error.code;
         var errorMessage = error.message;
         // ...
     }).catch(function (error) {
             console.error("Error adding document: ", error);
         }).then(
       this.props.history.push('./ForDentist/main')
     )}
     signup=()=>{
       console.log('fdfdjs')
      this.props.history.push('./sign')

     }
 
  render(){
    return(
      <div>
        <div>
        <h1> Login </h1>


<h3>  User Name  </h3>
<Input id="filled-basic" label="Enter Your User Name" variant="filled" onChange={this.addEmail} />

<h3>  Password </h3>
<PasswordField
             hintText="At least 8 characters"
            floatingLabelText="Enter your password"
           errorText="Your password is too short"
           onChange={this.addPassword}
        />

        </div>
        <div>
        <Button variant="contained" color="primary"className="submitbutton" onClick={this.login}>Log in</Button> </div>
        <h6>Don't have a acount</h6>
        <Button variant="contained" color="primary"className="submitbutton" onClick={this.signup}>sign up </Button>


      </div>


    )
  }
  
}

export default Login;

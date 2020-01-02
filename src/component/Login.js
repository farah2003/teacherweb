import React, { Component } from 'react';

import {Button,Input} from '@material-ui/core';

import PasswordField from 'material-ui-password-field'



class Login extends Component{
  render(){
    return(
      <div>
        <div>
        <h1> Login </h1>


<h3>  User Name  </h3>
<Input id="filled-basic" label="Enter Your User Name" variant="filled" />

<h3>  Password </h3>
<PasswordField
             hintText="At least 8 characters"
            floatingLabelText="Enter your password"
           errorText="Your password is too short"
        />

        </div>
        <div>
        <Button variant="contained" color="primary"className="submitbutton">Submit</Button>        </div>



      </div>


    )
  }
  
}

export default Login;

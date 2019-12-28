import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PasswordField from 'material-ui-password-field'



class Login extends Component{
  render(){
    return(
      <div>
        <div>
        <h1> Login </h1>


<h3>  User Name  </h3>
<TextField id="filled-basic" label="Enter Your User Name" variant="filled" />

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

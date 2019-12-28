import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Login extends Component{
  render(){
    return(
      <div>
        <div>
        <h1> Login </h1>


<h3>  User Name  </h3>
<TextField id="filled-basic" label="Enter Your User Name" variant="filled" />

<h3>  Password </h3>
<TextField id="filled-basic" label="Enter Your Password" variant="filled" />


        </div>
        <div>
        <Button variant="contained" color="primary"className="submitbutton">Submit</Button>        </div>



      </div>


    )
  }
  
}

export default Login;

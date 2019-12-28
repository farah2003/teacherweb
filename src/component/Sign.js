import React, { Component } from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PasswordField from 'material-ui-password-field'


import './style/sign.css'


class Signin extends Component{
  render(){
    return(
      <div className="Container">
      <div>
          <h1>signing Up as Docoter</h1>


          <h3>  Full name  </h3>
          <TextField id="filled-basic" label="Your Full name" variant="filled" />

          <h3>  User Name </h3>
          <TextField id="filled-basic" label="Your User Name" variant="filled" />

          <h3> Password </h3>
          <PasswordField
             hintText="At least 8 characters"
            floatingLabelText="Enter your password"
           errorText="Your password is too short"
        />

          <h3> Your Phone Number</h3>
          <TextField id="filled-basic" label="Enter your Phone Number" variant="filled" />


        </div>
        <div> <Button variant="contained" color="primary"className="submitbutton">Submit</Button> </div>





      </div>
    )
  }
}

export default Signin ;

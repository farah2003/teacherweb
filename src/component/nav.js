import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import red from '@material-ui/core/colors/red';

import './style/header.css';
import { AppBar,Button ,Toolbar } from '@material-ui/core';
const primary = red[500]; 
class Nav extends Component{

  componentWillMount(){
    console.log(primary)
  }
  
  render(){
    return(
  
      <div className="Nav">
       
        <AppBar color={primary}> 
        <Toolbar>

<Button color="inherit">
<NavLink to="/">Home</NavLink>
</Button>
<Button color="inherit">
<NavLink  to="/contact">ContactUs</NavLink>
</Button>
<Button color="inherit">
<NavLink to="/about">About</NavLink>
</Button>
<Button color="inherit">
<NavLink to="/sign">Signup </NavLink>
</Button>
<Button color="inherit">
<NavLink to="/login">Log in</NavLink>
</Button>

   </Toolbar>
</AppBar>
        
      </div>
    )
  }
}

export default Nav;
import React, { Component } from 'react';
import { NavLink} from "react-router-dom";

import './style/header.css';
import { AppBar,Button ,Toolbar } from '@material-ui/core';
class Nav extends Component{
  render(){
    return(
      <div className="Nav">
       
        <AppBar className="header">
        <Toolbar>

      <Button color="inherit">
      <NavLink to="/">Home</NavLink>
      </Button>
      <Button color="inherit">
      <NavLink  to="/contact">Home</NavLink>
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
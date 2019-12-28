import React, { Component } from 'react';
import { NavLink} from "react-router-dom";

import './style/header.css';
import { AppBar,Button ,Toolbar, Typography} from '@material-ui/core';

class SNav extends Component{
  render(){
    return(
      <div className="Nav">
       
        <AppBar className="header">
        <Toolbar>

        <Typography  >
 welcome
</Typography>

   </Toolbar>
</AppBar>
        
      </div>
    )
  }
}

export default SNav;
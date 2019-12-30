import React, { Component } from 'react';
import { NavLink} from "react-router-dom";


import { AppBar,Button ,Toolbar, Typography,Tabs,Tab,IconButton,InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles,fade}  from '@material-ui/core/styles';
import './stylefordent/navfar.css'
import PersonIcon from '@material-ui/icons/Person';
import './profileDent'


  
class DNav extends Component{
    

    move=(e)=>{
    //  console.log('fdgjfng')
    // this.props.history.push('./profileDent')
    }
    change=()=>{
      console.log('dfgjfg')
    }
  render(){
    


    return(
      <div className="Nav">
          <div>
       
        <AppBar className="header">
        <Toolbar>
            



        <Typography  >
 welcome Farah Ismails
</Typography>


<div className="navRight">
    
<div className='search'>
            <div className='searchIcon'>
              <SearchIcon  />
            </div>
            <InputBase
            className="Input"
              placeholder="Search…"
              
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            </div>
            <div className="personIcon">
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.move}
                color="inherit"
              >
         < PersonIcon >
         </PersonIcon>
        </IconButton>
    </div>
   </Toolbar>

</AppBar></div>

        
      </div>
    )
  }
}

export default DNav;
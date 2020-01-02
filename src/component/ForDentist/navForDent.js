import React, { Component } from 'react';



import { AppBar,Toolbar, Typography,IconButton,InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import './stylefordent/navfar.css'
import PersonIcon from '@material-ui/icons/Person';
import './profileDent'


  
class DNav extends Component{
  move=()=>{
    this.props.history.push('./profileDent')
   }
   

 
  change=()=>{
      console.log('dfgjfg')
    }
  render(){
    


    return(
      <div className="Nav">
       
          <div>
          48c8df
        <AppBar className="header"  style={{ background: '#2E3B55'}}>
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
<button onClick={this.move}>fhjhvkmbm bfvgh</button>
<button onClick={this.move}>fhjhvkmbm bfvgh</button>
<button onClick={this.move}>fhjhvkmbm bfvgh</button>
<button onClick={this.move}>fhjhvkmbm bfvgh</button>
<button onClick={this.move}>fhjhvkmbm bfvgh</button>
        
      </div>
    )
  }
}

export default DNav;
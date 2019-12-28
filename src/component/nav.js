import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import './style/Nav.css';
class Nav extends Component{
  render(){
    return(
      <div className="Nav">
        <div className="leftNav">
           
       <NavLink to="/">Home</NavLink>
       <NavLink to="/about">About Us</NavLink>
       <NavLink to="/contact">Contact Us</NavLink>
        </div>
      
       <div className="rightNav">
       <NavLink className="link" to="/Sign">sign up</NavLink>
       <NavLink  className="link" to="/Login">log in</NavLink>
      
       </div>
      </div>
    )
  }
}

export default Nav;
import React, { Component } from 'react';


import './App.css';
import Nav from './component/Nav'
import Home   from './component/Home';
import Aboutus from './component/Aboutus';
import Contactus  from './component/Contactus';
import Signin   from './component/Sign';
import Login   from './component/Login';


class App extends Component{
  render(){
    return(
      
      <div>

        <Nav/>
        <Home/>
        <Aboutus/>
        <Contactus/>
        <Signin/>
        <Login/>

      </div>


      
      
  
    )
  }
}

export default App;

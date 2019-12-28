import React, { Component } from 'react';
import { BrowserRouter, Route,Switch}from "react-router-dom"


import './App.css';
import Nav from './component/nav'
import Home   from './component/Home';
import Aboutus from './component/Aboutus';
import Contactus  from './component/Contactus';
import Signin   from './component/Sign';
import Login   from './component/Login';
import Fillin from './component/fillin'
import { Button } from '@material-ui/core';



class App extends Component{


  render(){
    return(
      
      <div>
    

    <BrowserRouter>
    <div>
     <Nav></Nav>
    <Switch>
    <Route path="/" component={Home} exact></Route>
    <Route path="/about"component={Aboutus}></Route>
    <Route path="/contact"component={Contactus}></Route>
    <Route path="/sign"component={Signin}></Route>
    <Route path="/login"component={Login}></Route>
    <Route path="/fillin"component={Fillin}></Route>


    </Switch>
    </div>
    </BrowserRouter>

      </div>


      
      
  
    )
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route,Switch}from "react-router-dom"


import './App.css';

import Home   from './component/Home';
import Main   from './component/index';
import Aboutus from './component/Aboutus';
import Contactus  from './component/Contactus';
import Signin   from './component/Sign';
import Login   from './component/Login';
import Fillin from './component/fillin';
import Mainfordent  from './component/ForDentist/main'
import Profile from './component/ForDentist/profileDent'
import FTab from './component/ForDentist/pageTabs/page1'

import { Button } from '@material-ui/core';



class App extends Component{


  render(){
    return(
      
      <div>
    

    <BrowserRouter>
    <div>
     <Main></Main>
    <Switch>
    <Route path="/" component={Home} exact></Route>
    <Route path="/about"component={Aboutus}></Route>
    <Route path="/contact"component={Contactus}></Route>
    <Route path="/sign"component={Signin}></Route>
    <Route path="/login"component={Login}></Route>
    <Route path="/fillin"component={Fillin}></Route>
    <Route path="/ForDentist/main"component={Mainfordent }></Route>
    <Route path='/ForDentist/profileDent' Component={Profile}></Route>
 
    <Route path='/ForDentist/pageTabs/page1' Component={FTab}></Route>



    </Switch>
    </div>
    </BrowserRouter>

    
      </div>


      
      
  
    )
  }
}

export default App;

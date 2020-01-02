import React, { Component } from 'react';
import { BrowserRouter, Route,Switch}from "react-router-dom"


import './App.css';

import Home   from './component/Home';
import Main   from './component/index';
import Aboutus from './component/Aboutus';
import Contactus  from './component/Contactus';
import Signin   from './component/sign';
import Login   from './component/Login';
import Fillin from './component/fillin';
import Mainfordent  from './component/ForDentist/main'
import Profile from './component/ForDentist/profileDent'
import FiratTab from './component/ForDentist/page1'
import SecandPage from './component/ForDentist/page2'




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
    <Route path='/ForDentist/page2' component={SecandPage}></Route>
    <Route path='/ForDentist/profileDent' component={Profile}></Route>
    <Route path='/ForDentist/page1' component={FiratTab}></Route>



    </Switch>
    </div>
    </BrowserRouter>

    
      </div>


      
      
  
    )
  }
}

export default App;

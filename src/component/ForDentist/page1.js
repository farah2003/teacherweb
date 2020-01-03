import React, { Component } from 'react';
import DNav from './navForDent'
 
import Mainfordent from './main'
class  FiratTab extends Component{
    render(){
        return(
            <div>
           
             
             
<Mainfordent  {...this.props}></Mainfordent>
<h1> page 1</h1>
            </div> 
        )
    }
}
export default  FiratTab;
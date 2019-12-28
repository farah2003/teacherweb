import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './style/home.css'
import './fillin'

class  Home extends Component{
 move=()=>{
  this.props.history.push('./fillin')
 }
  render(){
    return(
      <div>
        <div className="container">
       
      </div>
      <div className="container1">
      <Button variant="contained" color="primary" className="fillin" onClick={this.move}>fill in</Button>
      </div>
      
        
      </div>
      
    )
  }
}

export default Home ;

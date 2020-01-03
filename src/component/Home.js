import React, { Component } from 'react';
import { Button ,Card} from 'antd';

import './style/home.css'
import './fillin'
const { Meta } = Card;


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
      <Button type="primary">Button</Button>
      </div>

      
        
      </div>
      
    )
  }
}

export default Home ;

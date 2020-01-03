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
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>

      
        
      </div>
      
    )
  }
}

export default Home ;

import React, { Component } from 'react';
import DNav from './navForDent'

import DHome from './HomeDent'
import Mainfordent from './main'
import { Card } from 'antd';

const { Meta } = Card;
class  FiratTab extends Component{
    render()
    {return(
     
        <div style={{backgroundColor:'red'}}>
            
         
            <DHome {...this.props}>  </DHome>
            <div style={{marginTop:120}}>
            <Card  title={<h4 style={{height:10,marginTop:3,fontWeight:'bold' ,marginRight:30}}>farah shaqoura</h4> }  style={{ width: 900,height:200 ,marginLeft:220,marginBottom:40, marginTop:10}}>
            <label>16</label><h4>:االعمر</h4><label>16</label>
            </Card>
          
        </div>
        </div>
  
        )
    }
}
export default  FiratTab;
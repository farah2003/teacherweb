import React, { Component } from 'react';

import { Menu,Layout,Icon} from 'antd';


import './stylefordent/navfar.css'


import './profileDent'
const { Header } = Layout;


  
class DNav extends Component{
  
  move1=()=>{
    console.log('nav')
    this.props.history.push('./profileDent')
   }


 

  render(){
    console.log(this.props)

    return(
      <div className="Nav">
       
       <div>
         
<Layout>

<Header style={{ background: ' rgb(0, 151, 221)', padding: 0 }}>
            <Icon style={{width:100}}
              className="trigger"
              type="user" 
              onClick={this.move1}
              
            />
          </Header>


  
 
    </Layout>


    </div>
     

        
      </div>
    )
  }
}

export default DNav;
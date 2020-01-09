import React, { Component } from 'react';

import { Card , Icon, Avatar } from 'antd';

const { Meta } = Card;
class  FiratTab extends Component{
    render()
    {return(
     
        <div style={{backgroundColor:'#34495e', flex:1}}>
            
         
            <div>
                
            <Card
    style={{ width: 300, marginLeft:520 }}
    cover={
      <img
        alt="example"
        src="https://www.eafhc.org/wp-content/uploads/sites/411/2019/02/content-image-dental.png"
      />
    }
    actions={[
      <a href="https://www.instagram.com/kemor1/"><Icon type="instagram" /></a>,
      <a href="https://www.facebook.com/karam.hillis"><Icon type="facebook" /></a>,
      <a href="https://twitter.com/karam1st"><Icon type="twitter"/></a>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://png.pngtree.com/png-clipart/20190115/ourmid/pngtree-love-tooth-day-female-dentist-dentist-in-white-coat-long-hair-png-image_344681.jpg" />}
      title="D. Amal"
      description="Dental dentist student in his 4th year at college."
    />
  </Card>,
  <Card size="Large" title="Information" extra={<a href="#">More</a>} style={{ width: 1350 }}>
      <h1 style={{fontFamily:'Helvetica Neue'}}>Name:<h1 style={{fontFamily:'Segoe UI Emoji',fontSize:20}}>Amal Mohammed</h1></h1>
      
      <label style={{marginBottom:200}}>
      <h1 style={{fontFamily:'Helvetica Neue'}}>Date of Birth:<h1 style={{fontFamily:'Segoe UI Emoji',fontSize:20}}>13/6/2003</h1></h1>
      </label>
      <label style={{marginBottom:200}}>
      <h1 style={{fontFamily:'Helvetica Neue'}}>Phone Number:<h1 style={{fontFamily:'Segoe UI Emoji',fontSize:20}}>021319312</h1></h1>
      </label>
    </Card>

 
  
          
        </div>
        
     

         
        </div>

  
        )
    }
}
export default  FiratTab;
import React, { Component,Checkbox } from 'react';
import{Card,Alert} from 'antd'
import './stylefordent/allpage.css'

class FPage extends Component{

  
  
  render(){
    return(
      
      <div >
                <div>
             <Card  style={{ width: 900,height:450 ,marginLeft:220,marginBottom:40, marginTop:10}} >
            <label></label><h4> PatientName : AHmed hamsadmasdsa </h4><label></label>
            <label></label><h4> Phone Number : 341312312</h4><label></label>
            <label></label><h4> Age : 17</h4><label></label>
            <label></label><h4>Email : adsadsa@gmail.com</h4><label></label>
            <label></label><h4> Aditional Notes : none</h4><label></label>
            <label></label><h4> Another diseases  :none</h4><label></label>




            </Card>

          </div>

      </div>


      
      
  
    )
  }
}

export default FPage;
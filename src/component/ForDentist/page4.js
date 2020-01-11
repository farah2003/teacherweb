import React, { Component,Checkbox } from 'react';
import{Card,Alert} from 'antd'
import './stylefordent/allpage.css'
import * as firebase from 'firebase'

class FPage extends Component{

  state={
    list:[],
    data:[]
}

  getFilteredName = () =>{
    
    const db = firebase.firestore();
   

    db.collection("patients").where('classD','==','D').get().then((userSnapshot) => {
     // console.log(userSnapshot)
      var list=[] 
      userSnapshot.docs.map(doc =>{ doc.data()
      
      let x= doc.data()
      list.push(x)
      this.setState({
        list
      })

       } );

      })
  }

    
  render(){
    const {list,data}=this.state

    return(
      
      <div >
                
        {
          list.map((item,i)=>
      
       
          <div>
             <Card  title={<h4 style={{height:10,marginTop:3,fontWeight:'bold' ,marginRight:30}}>{item.Name}</h4> }  style={{ width: 900,height:200 ,marginLeft:220,marginBottom:40, marginTop:10}}>
            <label>{item.age}</label><h4>:االعمر</h4><label>16</label>
            </Card>
          </div>

     
          )
        }
  
        

     
  
       


      
  <button onClick={this. getFilter}> fff</button>



      
        <button onClick={this. getFilteredName}> filter</button>
  
  

            

      </div>



      
      
  
    )
  }
}

export default FPage;
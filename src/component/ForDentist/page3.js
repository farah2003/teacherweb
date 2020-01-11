import React, { Component } from 'react';
import { Alert, Button } from 'antd';
import './stylefordent/allpage.css'
import DHome from './HomeDent'
import { Card ,Checkbox } from 'antd';
import { Popconfirm, message } from 'antd';

import * as firebase from 'firebase'
class ThirdPage extends Component{

  state={
    list:[],
   ListForId:[],
    check:"",
    
}

 

  confirm = (item)=> {
  console.log(item)
  
    this.update(item)
  }

  cancel = ()=> {   
  

    console.log("gbg");
    message.error('Click on No');
  }


  componentDidMount(){
      
  this.getData()
    
  }
  getData = ()=>{
    const db = firebase.firestore();
    const {list}=this.state
    let newList =[]

    db.collection("patients").where('classC','==','C').get().then((userSnapshot) => {
    console.log( userSnapshot.docs)
        
      userSnapshot.docs.map(doc =>
        {
      
      let x= doc.data()
  
      x.id=doc.id
      newList.push(x)    
      } );


        newList=newList.filter((item)=>item.check!=true)
    
      this.setState({
        list:newList
      })
      
  })
  }
  update=(i)=>{
    const{list}=this.state

    
    let x=[]
    const db = firebase.firestore();

    var washingtonRef = db.collection("patients").doc(i);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
    check: true
  })

  .then(()=> {
      console.log("Document successfully updated!");
  }).then(()=>{

  
    this.getData()

  })



  


  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  })

        

  }


  render(){

    const {list,data}=this.state

   
    return(
    
      <div >
        
        {

 

              
         list.map((item,index)=>{
         
          return(
         <div> 
      
       
          <div>
         
             
             <Card  title={<h4 style={{height:10,marginTop:3,fontWeight:'bold' ,marginRight:30}}>{item.Name}</h4> }  style={{ width: 900,height:200 ,marginLeft:220,marginBottom:40, marginTop:10}}>
           
           
            <label>{item.age}</label><h4>:االعمر</h4><label>16</label>
            <label>{item.id}</label><h4>:االعمر</h4><label>16</label>
            
            
            <Popconfirm
    title="Are you sure delete this task?"
    onConfirm={()=>this.confirm(item.id)}
    onCancel={this.cancel}
    okText="Yes"
    cancelText="No"
  >
            <Button  > select this  </Button>
  </Popconfirm>
            
            
            </Card>

          </div>
          </div>

          )
          
        }
     
  
          )}   

     
  
       



  
  
     
 

      </div>


      
      
  
    )
  }
}

export default ThirdPage;
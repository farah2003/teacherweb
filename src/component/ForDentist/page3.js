import React, { Component } from 'react';

import './stylefordent/allpage.css'
import DHome from './HomeDent'
import { Card } from 'antd';

import * as firebase from 'firebase'
class ThirdPage extends Component{

  state={
    list:[],
    data:[]
}

  getFilteredName = () =>{
    
    const db = firebase.firestore();
   

    db.collection("patients").where('classC','==','C').get().then((userSnapshot) => {
     // console.log(userSnapshot)
      var list=[] 
      userSnapshot.docs.map(doc =>{ doc.data()
      
      let x= doc.data()
      list.push(x)
      this.setState({
        list
      })

       } );

      
      //.forEach((userDoc) => {
   //   console.log('vc ',userDoc.data())
       
      //  userDoc.ref.collection('patients').get().then(  numSnapshot=> {
         // console.log('gggg',numSnapshot)
        //  numSnapshot.forEach(numDoc => {
            //console.log(numDoc.data());
     
         /// });
      //  });
   
 
     //   var data=doc
      //
       // for (var key in data){
       //     var item=(`${key} : ${data[key]}`)
        //    list.push(item)
        
      //  }
      //  this.setState({
        //  list:list
      
      
     
       
          //this.setState({
            ///name:doc.data().Name,
            //age:doc.data().age
           //})
       //   this.setState({
          //  name:(`${doc.id} => ${doc.data()}`)
          //})
          
      
       // });
      
   // }).catch((error) => { 
   ///   console.log("Error getting document: ", error);
  ///});  
  
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

export default ThirdPage;
import React, { Component } from 'react';
import { Alert } from 'antd';
import './stylefordent/allpage.css'
import DHome from './HomeDent'
import * as firebase from 'firebase'
class SecandPage extends Component{

  state=({
    list:[]
  })
  show= () =>{
    
    const db = firebase.firestore();
   

    db.collection("patients").where('check','==',true).get().then((userSnapshot) => {
     console.log(userSnapshot.docs)
  
      var list=[] 
      userSnapshot.docs.map(doc =>{ doc.data()
      
      let x= doc.data()
      console.log(doc.data())
    
      list.push(x)
     
      this.setState({
        list
      })
     
  
       } );
      
alert('gfh ')
      
    
  
   })}

  render(){


    return(

      
      <div >
   
       }
             
      <button onClick={this.show}>show</button>
      <Alert
        onClose={this.onClose} style={{width:200,height:150}}S 
        
   type="info" closeText="Close Now"
        message={
        <div >gh gvn 
          <div style={{paddingTop:80}}><button>agree</button></div>
        </div> } >
        
        </Alert>

      </div>


      
      
  
    )
  }
}

export default SecandPage;
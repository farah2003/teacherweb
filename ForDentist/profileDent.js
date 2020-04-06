import React, { Component } from 'react';

import { Card , Icon, Avatar } from 'antd';

import * as firebase from 'firebase'

import './stylefordent/main.css'

import './page2'

const { Meta } = Card;


class Profile extends Component{

  state={
    list:[],

    check:"",
    UserName:'',
    Phone:'',
    Name:'',
    Email:''
}

  componentWillMount(){
  // const  user = firebase.auth().currentUser;
   
  //  this.getuserCard()
    this.getUseInfo()
  
  }
 // getuserCard = ()=>{
  //  const db = firebase.firestore();
  //  const {list}=this.state
   // const  user = firebase.auth().currentUser;
   // let newList =[]

    //db.collection("patients").where('id','==',user.uid).get().then((userSnapshot) => {
    //console.log( 'cardfor user ',userSnapshot.docs)
        
     // userSnapshot.docs.map(doc =>
     //   {
      
     // let x= doc.data()
  
          
     // newList.push(x)    
     /// } );  
      //this.setState({
      //  list:newList
    //  })
      
  //})
 // }
  getUseInfo= ()=>{
    const db = firebase.firestore();
    
    //const  user = firebase.auth().currentUser;
   // console.log('user id ',user.uid) 
    db.collection("Users").doc('TCI2XrH2HCN0ueBDXsguyAsYyaJ3').get().then((userdoc) =>{
      var UserName=userdoc.data().UserName
      var Phone=userdoc.data().Phone
      var Name=userdoc.data().Name
      var Email =userdoc.data().Email
       
      this.setState({
        UserName:UserName,
        Phone:Phone,
        Name:Name,
        Email: Email
      })
  
  
  
      })
  
  }
  render(){

    const {list}=this.state
    return(
      
    
     
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
<Card size="Large" title="Information" extra={<a href="##">More</a>} style={{ width: 1350 }}>
<h1 style={{fontFamily:'Segoe UI Emoji',fontSize:20}}>{this.state.Name}</h1>

<label style={{marginBottom:200}}>
<h1>userName</h1>
<h1>13/6/2003</h1>
</label>
<label style={{marginBottom:200}}>
<h1>Phone Number:</h1>
<h1 style={{fontFamily:'Segoe UI Emoji',fontSize:20}}>{this.state.Phone}</h1>
</label>
</Card>



    
  </div>
  
  {               
list.map((item,index)=>{

 return(
<div> 
 <div>

    
    <Card  title={<h4 style={{height:10,marginTop:3,fontWeight:'bold' ,marginRight:30}}>{item.Name}</h4> }  style={{ width: 900,height:200 ,marginLeft:220,marginBottom:40, marginTop:10}}>
  
  
   <label>{item.age}</label><h4>:االعمر</h4><label>16</label>
   <label>{item.id}</label><h4>:االعمر</h4><label>16</label>
   

   
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

export default Profile;

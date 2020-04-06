import React, { Component } from 'react';
import { Input, Button,Card,Icon } from 'antd';
import './HomeDent'

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
  const  user = firebase.auth().currentUser;
   
   this.getuserCard()
    this.getUseInfo()
  
  }
  getuserCard = ()=>{
    console.log("fdg ")
    const db = firebase.firestore();
   const {list}=this.state
    const  user = firebase.auth().currentUser;
    let newList =[]

    db.collection("patients").where('id','==',user.uid).get().then((userSnapshot) => {

        
      userSnapshot.docs.map(doc =>
        {
          console.log( 'cardfor user ', doc.data())
      let x= doc.data()
  
          
      newList.push(x)    
      } );  
    this.setState({
        list:newList
      })
      console.log(this.state.list)
})
  }
  getUseInfo= ()=>{
    const db = firebase.firestore();
    
    const  user = firebase.auth().currentUser;
   console.log('user id ',user.uid) 
    db.collection("Users").doc(user.uid).get().then((userdoc) =>{
      console.log("data",userdoc.data())

      var UserName=userdoc.data().UsersName
      var Phone=userdoc.data().phone
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
  move1=()=>{
   
      this.props.history.push("./HomeDent")
     }
  render(){

    const {list}=this.state
    return(
      
   
     
      <div style={{flex:1}}>
        {/*header*/}
        <div style={{height:60}}>
        <div style={{paddingTop:18,float:"right",marginRight:70}}>
         <Icon  type="home" style={{ color: '#4d4dff',fontSize: '28px',paddingTop:0,marginRight:36 }}
         onClick={this.move1} />
         <Icon  type="setting" style={{fontSize: '27px', color: '#4d4dff' }} />
          </div>
          <div>
          <label className="Label" style={{marginLeft:120 ,paddingTop:60,color:'blue',fontFamily: 'Satisfy',fontSize:30}}>Dent Guide</label>
          </div>
        
        </div>
     {/*profil*/}
        <div style={{width:"900", backgroundColor:"#add8e6",height:200,marginTop:0,marginBottom:130}}>

        <div style={{width:500,height:200,display:"flex",paddingTop:50}} >

<div style={{height:300,float:"left"}}>
<img src={require('../ForDentist/image.png' )} style={{width:"70%",height:"60%",borderRadius:"50%",marginLeft:90,marginTop:60,marginBottom:50}} />
</div>

<div style={{float:"right",height:400,marginTop:150,marginLeft:30,width:400}}>
<h2>{this.state.UserName}</h2>
<h4>student level 5</h4>

  

</div>
</div>
       
        </div>
        

      
                      


 


 <div style={{display:"flex",backgroundColor:"#e6e6fa"}}>
{/*inf*/}
<div style={{float:"left",width:300,marginLeft:100,marginTop:50}}>

<div style={{display:"flex"}}>
<div style={{float:"right",marginRight:20}}>
<Icon  type="user" style={{fontSize: '20px', color: '#4d4dff' }} />
</div>
<div style={{float:"left"}}>
<h4>{this.state.Name}</h4>
</div>
</div>
<div style={{display:"flex"}}>
<div style={{float:"right",marginRight:20}}>
<Icon type="mail" style={{ color: '#4d4dff',fontSize: '20px' }} />
</div>
<div style={{float:"left"}}>
<h4>{this.state.Email}</h4>
</div>
</div>
<div style={{display:"flex"}}>
<div style={{float:"right",marginRight:20}}>
<Icon  type="phone" style={{ color: '#4d4dff',fontSize: '20px' }} />
</div>
<div style={{float:"left"}}>
<h4>{this.state.Phone}</h4>
</div>
</div>


</div>

{/*card*/}
  { list.map((item,index)=>{
    return(

<div style={{float:"right"}}>
<Card  title={<h4 style={{height:10,marginTop:3,fontWeight:'bold' ,marginRight:30}}>FCH XF</h4> }  style={{ width: 700,height:200 ,marginLeft:90,marginBottom:40, marginTop:10}}>
          
          
         <h4>:االعمر</h4><label>{item.Name}</label>
         <h4>:االعمر</h4><label>{item.id}</label>
          
          
          
          </Card>

</div>
   ) })}
 
 </div>



   
      
    {/*  <div>
          
     
  
      <Card
style={{ width: 300, marginLeft:520 }}



>

</Card>
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
*/}
   
 
  </div>        
    )
  }
}

export default Profile;

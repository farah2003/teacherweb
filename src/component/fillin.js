

import React, { Component } from 'react';
import {Button,Input,Checkbox,FormControlLabel} from '@material-ui/core';

import './style/fill.css'
import SNav from './secandNav'


import * as firebase from 'firebase'

class Fillin extends Component{
  state={
    name:'',
    phone:'',
    age:'',
    email:'',
    notes:'',
    disease:''
  }
    
  addName=(e)=>{
    this.setState({
      name:e.target.value
      
    })

  }
     
  addPhone=(e)=>{
    this.setState({
      phone:e.target.value
    })
  }
     
  addAge=(e)=>{
    this.setState({
      age:e.target.value
    })
  }
     
  addEmail=(e)=>{
    this.setState({
      email:e.target.value
    })
  }
  addNotes=(e)=>{
    this.setState({
      notes:e.target.value
    })
  }
     
  addDisease=(e)=>{
    this.setState({
      disease:e.target.value
    })
  }
  send=()=>{
    var name=this.state.name;
    var phone=this.state.phone;
    var age=this.state.age;
    var email=this.state.email
    var notes=this.state.notes
     var disease=this.state.disease

    const db = firebase.firestore();


db.collection("patients").add({
        Name: name,
       Phone:phone,
        Age: age,
        Email:email,
        Notes:notes,
        Disease:disease

    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        }) .then(
      this.props.history.push('./')
    )

   
  
  }
 
  render(){
    return(
      <div className="div">
          <SNav className="header" ></SNav>
          <div className="continer" >
          <div  className="body" >
                
           
               <p className="h1"> استمارة المريض  </p>

             
              <h3 className="h3">  الإسم الكامل للمريض </h3>
              <Input id="filled-basic" label="اسم المريض رباعي" variant="filled" onChange={this.addName} />
              <h3  className="h3">  رقم هاتف المريض </h3>
              <Input id="filled-basic" label="رقم الهاتف" variant="filled"  onChange={this.addPhone}/>

              <h3  className="h3">  العمر </h3>
              <Input id="filled-basic" label="أمراض أخرى" variant="filled"  onChange={this.addAge}/>
              <h3  className="h3"> Email addresss </h3>
              <Input id="filled-basic" label="أمراض أخرى" variant="filled" onChange={this.addEmail} />

             

              <h3  className="h3"> ملاحظات إضافية  </h3>
              <Input id="filled-basic" label="" variant="filled"  onChange={this.addNotes}/>

              <h3  className="h3">  أمراض مزمنة أو أمراض أخرى </h3>
              <Input id="filled-basic" label="أمراض أخرى" variant="filled" onChange={this.addDisease} />

              

              <h3  className="h3"> العلاج التي تحتاجه  </h3>

              <FormControlLabel
               label="تسوس اسنان"
             control={
          <Checkbox
       value="checkedI"
        color="primary"

      />
        }
       
      />
              
              
              </div>
               <div className="button">
          <Button variant="contained" color="primary"className="submitbutton" onClick={this.send}> ارسال </Button>
          </div>

          

        </div>
        </div>


    )
  }
  
}

export default Fillin;

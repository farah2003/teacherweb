

import React, { Component } from 'react';
import { Input , Checkbox } from 'antd';
import './style/fill.css'
import SNav from './secandNav'


import * as firebase from 'firebase'
const { TextArea } = Input;


class Fillin extends Component{
  state={
    name:'',
    phone:'',
    age:'',
    email:'',
    notes:'',
    disease:'',
    defaultChecked:'',
    id:''

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
     var id =this.state.id

    const db = firebase.firestore();


db.collection("patients").add({
        Name: name,
       Phone:phone,
        Age: age,
        Email:email,
        Notes:notes,
        Disease:disease,
        id:id


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
  check=(e)=>{
  console.log(e.target.checked)
  e.target.checked?
  this.setState({
    id:'A'
  }):
  this.setState({
    id:''
  })

  
   
   
  
  }
 
  render(){
    return(
      <div className="div">
          <SNav className="header" ></SNav>
          <div className="continer" >
          <div  className="body" >
                
           
               <p className="h1"> استمارة المريض  </p>

             
              <h3 className="h3">  الإسم الكامل للمريض </h3>
              <Input placeholder="اسم المريض رباعي" onChange={this.addName} />
              <h3  className="h3">  رقم هاتف المريض </h3>
              <Input placeholder="رقم الهاتف" onChange={this.addPhone}/>
              <h3  className="h3">  العمر </h3>
              <Input placeholder="العمر" onChange={this.addAge}/>
              <h3  className="h3"> Email addresss </h3>
              <Input placeholder=" الإيميل" onChange={this.addEmail}  />
             

              <h3  className="h3"> ملاحظات إضافية  </h3>
              <TextArea rows={4} onChange={this.addNotes} />
              
              <h3  className="h3">  أمراض مزمنة أو أمراض أخرى </h3>
              <TextArea rows={4} onChange={this.addDisease} />

              <h3  className="h3"> العلاج التي تحتاجه  </h3>
              <div>
              <FormControlLabel
               label="تسوس اسنان"
             control={
          <Checkbox
       value="checkedI"
        color="primary"
        defaultChecked={''}
        onChange={this.check}

      />
        }
       
      />
      </div>
<div>

<Checkbox onChange={this.check}>خلع</Checkbox>
        
       
      
      </div>
              
              
              </div>
               <div className="button">
               <Button type="primary" onClick={this.send}>ارسال</Button>

          </div>

          

        </div>
        </div>


    )
  }
  
}

export default Fillin;

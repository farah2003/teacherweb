

import React, { Component } from 'react';
import { Input , Checkbox,Button, Card } from 'antd';
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
    idA:'',
    idB:'',
    idC:'',
    idD:'',
    idE:'',
    idF:'',
    

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
     var idA =this.state.idA
     var idB =this.state.idB
     var idC =this.state.idC
     var idD =this.state.idD
     var idE =this.state.id
     var idF =this.state.idF
   
    const db = firebase.firestore();


db.collection("patients").doc().add({
        Name: name,
       Phone:phone,
        Age: age,
        Email:email,
        Notes:notes,
        Disease:disease,
        calssA: idA,
        classB:idB,
        classC:idC,
        classD:idD,
        classE:idE,
        classF:idF


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
  checkA=(e)=>{
  console.log(e.target.checked)
  e.target.checked?
  this.setState({
    idA:'A'
  }):
  this.setState({
    idA:''
  }) 
  }
  checkB=(e)=>{
    console.log(e.target.checked)
    e.target.checked?
    this.setState({
      idB:'B'
    }):
    this.setState({
      idB:''
    }) 
    }
   
    checkC=(e)=>{
      console.log(e.target.checked)
      e.target.checked?
      this.setState({
        idC:'C'
      }):
      this.setState({
        idC:''
      }) 
      }
 
      checkD=(e)=>{
        console.log(e.target.checked)
        e.target.checked?
        this.setState({
          idD:'D'
        }):
        this.setState({
          idD:''
        }) 
        }
 
        checkE=(e)=>{
          console.log(e.target.checked)
          e.target.checked?
          this.setState({
            idE:'E'
          }):
          this.setState({
            idE:''
          }) 
          }
 
          checkF=(e)=>{
            console.log(e.target.checked)
            e.target.checked?
            this.setState({
              idF:'F'
            }):
            this.setState({
              idF:''
            }) 
            }
           
  render(){
  
    return(
      
      <div >
        <SNav></SNav>
         
          <div  className="body" >

    <Card className="card"   title={<h2 style={{marginTop:20,fontWeight:'bold',textAlign:'right' ,marginRight:30}}>استمارة</h2> }  style={{ width: 900,height:900 ,marginTop:90,marginLeft:220,marginBottom:50}}>
      
            
             
          
               <p className="h1"> استمارة المريض  </p>

             
              <h3 className="h3">  الإسم الكامل للمريض </h3>
              <Input  onChange={this.addName} style={{width:500}} />
              <h3  className="h3" >  رقم هاتف المريض </h3>
              <Input onChange={this.addPhone} style={{width:500}}/>
              <h3  className="h3">  العمر </h3>
              <Input  onChange={this.addAge} style={{width:500}}/>
              <h3  className="h3"> Email addresss </h3>
              <Input  onChange={this.addEmail} style={{width:500}} />
             

              <h3  className="h3"> ملاحظات إضافية  </h3>
              <TextArea rows={4} onChange={this.addNotes} style={{width:500}}/>
              
              <h3  className="h3">  أمراض مزمنة أو أمراض أخرى </h3>
              <TextArea rows={4} onChange={this.addDisease} style={{width:500}}/>

              <h3  className="h3"> العلاج التي تحتاجه  </h3>
            <div style={{alignItems:'flex-end'}}> 
        <div>
             تلبيسة   <Checkbox onChange={this.checkA}/>

              </div>

              <div>
             علاج عصب <Checkbox onChange={this.checkB}/> 
              </div>
              <div>
              طقم اسنان <Checkbox onChange={this.checkC}/>
            
              </div>
              <div>
              حشو اضراس <Checkbox onChange={this.checkD}/>
            
          
              </div>
              <div>
              خلع <Checkbox onChange={this.checkE}/>
            
              </div>
              <div>
            تنظيف اسنان <Checkbox onChange={this.checkF}/>
            
              </div>
              </div>
 
              <Button style={{color:" #466995",width:200}} onClick={this.send}>
             ارسال
           </Button>
         
       
                
       
        
              </Card>
              </div>
       
      </div>
      
       
      
      
              
              
           




        
       


    )
  }
  
}

export default Fillin;

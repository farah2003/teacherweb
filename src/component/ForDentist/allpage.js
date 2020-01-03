import React, { Component } from 'react';
import {Grid , Paper,FormControlLabel,Checkbox,Typography } from '@material-ui/core';
import * as firebase from 'firebase'
import './stylefordent/allpage.css'

export default class PCard  extends  Component{
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
  print=()=>{
    const db = firebase.firestore();

    db.collection("patients").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            name:`${doc.id} => ${doc.data().Name}`
          })
          this.setState({
            age:`${doc.id} => ${doc.data().Age}`
          })
          this.setState({
            email:`${doc.id} => ${doc.data().Email}`
          })
          this.setState({
            phone:`${doc.id} => ${doc.data().Phone}`
          })
          this.setState({})
          this.setState({})
          
        });

    });
    console.log(this.state.name)
  }

render(){
  const{name,age,phone}=this.state
  return (
    <div className="continer">
    <div className="paper">
      
        <div   >
      <Paper className="grid" >
      
          <Grid >

        
       
            <Grid>
              <Grid >
                <Typography >
                 {name}الاسم:
                </Typography>
                <Typography >
              العمر:{age}
                </Typography>
                <Typography >
                  نوع :خلع
                </Typography>
              </Grid>
              <Grid >
                <Typography >
                رقم الجوال:0599832484
                </Typography>
                <Typography >
              الامراض :لا يوجد
                </Typography>
              </Grid>
            </Grid>
            <div>
            <FormControlLabel
               label="طلب"
             control={
          <Checkbox
       value="checkedI"
        color="primary"
        defaultChecked={''}
      />
        }  
      />
      </div>
         
          </Grid>
       
      </Paper>
    </div>
    <button onClick={this.print}>vbvbs</button>

    </div >
  </div>
  );
}}
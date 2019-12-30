

import React, { Component } from 'react';
import {Button,Input} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './style/fill.css'
import SNav from './secandNav'


class Fillin extends Component{
  render(){
    return(
      <div className="div">
          <SNav className="header"></SNav>
          <div  className="body" >
                 <div  >
           
               <p className="h1"> استمارة المريض  </p>

             
              <h3 className="h3">  الإسم الكامل للمريض </h3>
              <Input id="filled-basic" label="اسم المريض رباعي" variant="filled" />

              <h3  className="h3">  أمراض مزمنة أو أمراض أخرى </h3>
              <Input id="filled-basic" label="أمراض أخرى" variant="filled" />

              <h3  className="h3">  رقم هاتف المريض </h3>
              <Input id="filled-basic" label="رقم الهاتف" variant="filled" />

              <h3  className="h3"> ملاحظات إضافية  </h3>
              <Input id="filled-basic" label="" variant="filled" />
              </div>
               <div className="button">
          <Button variant="contained" color="primary"className="submitbutton"> ارسال </Button>
          </div>

          

        </div>
        </div>


    )
  }
  
}

export default Fillin;

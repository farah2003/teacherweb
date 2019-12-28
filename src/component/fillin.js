

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class Fillin extends Component{
  render(){
    return(
      <div>
      <div>
      <h1> استمارة المريض  </h1>


<h3>  الإسم الكامل للمريض </h3>
<TextField id="filled-basic" label="اسم المريض رباعي" variant="filled" />

<h3>  أمراض مزمنة أو أمراض أخرى </h3>
<TextField id="filled-basic" label="أمراض أخرى" variant="filled" />

<h3>  رقم هاتف المريض </h3>
<TextField id="filled-basic" label="رقم الهاتف" variant="filled" />

<h3> ملاحظات إضافية  </h3>
<TextField id="filled-basic" label="" variant="filled" />



        </div>
        <div>
        <Button variant="contained" color="primary"className="submitbutton"> ارسال </Button>
        </div>



      </div>


    )
  }
  
}

export default Fillin;

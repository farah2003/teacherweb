import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';



import * as firebase from 'firebase'
import './sign'
import './ForDentist/main'

class Login extends Component{
  state={
    email:"",
    password: ""
  }
  addEmail=(e)=>{

    this.setState({
      email:e.target.value
    })
  }
  addPassword=(e)=>{
    this.setState({
      password:e.target.value
    })
    

  }
  login=()=>{

    var email=this.state.email
    var password=this.state.password

    
    firebase.auth().signInWithEmailAndPassword(email,
      password).catch(function (error) {
         // Handle Errors here.
         var error = error.code;
         var errorMessage = error.message;
         // ...
     }).catch(function (error) {
             console.error("Error adding document: ", error);
         }).then(
       this.props.history.push('./ForDentist/main')
     )}
     signup=()=>{
       console.log('fdfdjs')
      this.props.history.push('./sign')

     }
 
  render(){
    return(
      <div>
         <Form className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              onChange={this.addEmail}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
            onChange={this.addPassword}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.login}>
            Log in
          </Button>
          Or <a href='./sign'> don't have a acount sign up </a>
        </Form.Item>
      </Form>
      </div>
     
    )
  }
  
}

export default Login;

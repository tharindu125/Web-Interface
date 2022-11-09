import React, { Component } from 'react'
import img2 from "../image/img2.jpg";
//  import Login from './Login';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import axios from 'axios';



export default class Signin extends Component {

  constructor(props){
    super(props)

    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeEmailAd = this.onChangeEmailAd.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onUserSubmit = this.onUserSubmit.bind(this);

    this.state = {
      FullName : '',
      emailAd : '',
    }
  }

  onChangeFullName(e){
    
    this.setState({FullName : e.target.value})
    
  }

  onChangeEmailAd(e){
    this.setState({emailAd : e.target.value})
  }

  onChangePassword(e){
    this.setState({password: e.target.value})
  }


  onUserSubmit(e){
    e.preventDefault();

    const RegisterObject = {
      FullName : this.state.FullName,
      email : this.state.emailAd,
      password : this.state.password,
    };
    
    console.log(RegisterObject);
    axios
      .post('http://localhost:4000/register/signin', RegisterObject)
      .then(res => console.log(res.data));
      

    this.setState({FullName:'',emailAd:'',password:''});
  }

  render() {
    return (
      <div>
        <div style={{ backgroundImage:`url(${img2})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"contain", 
            height:950,
            width:1518}}>

            <div className="Auth-form-container">
                <div className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign-Up</h3>
                </div>
                <div className="text-center">
                Already registered?{" "}
                <a href="/Login">Log-in</a>
                
                </div>
                
                <Form className="form-group-mt">

                  <Form.Group className='formSign' controlId='FullName' >
                    <Form.Label>Full Name :</Form.Label>
                    <Form.Control type = "text" placeholder='Full Name' value={this.state.FullName} onChange={this.onChangeFullName}/>
                    
                  </Form.Group>

                  <Form.Group className='formSign' controlId='emailAd' >
                    <Form.Label>Email Address :</Form.Label>
                    <Form.Control type = "email" placeholder='e-mail' value={this.state.emailAd} onChange={this.onChangeEmailAd}/>
                  </Form.Group>

                  <Form.Group className='formSign' controlId='password' >
                    <Form.Label>password :</Form.Label>
                    <Form.Control  type = "password" placeholder='Password' value={this.state.password} onChange={this.onChangePassword}/>
                  </Form.Group>

              

                  <div className="d-grid gap-2 mt-3">
                      
                          <Button type="submit" block="block" size="lg" onClick={this.onUserSubmit}>
                          Sign-Up
                          </Button>
                      
                  </div>

                  <p className="forgot-password text-right mt-2">
                      Forgot <a href="/Forgotpw">password?</a>
                  </p>

                </Form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


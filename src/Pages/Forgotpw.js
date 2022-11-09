import React, { Component } from 'react';
import img2 from "../image/img2.jpg";
//import { Form } from 'react-bootstrap';
import axios from 'axios';

export default class Forgotpw extends Component {

    constructor(props){
        super(props)
    
        this.onChangeEmailAd = this.onChangeEmailAd.bind(this);
        this.onChangePw = this.onChangePw.bind(this);
        this.onChangePwre = this.onChangePwre.bind(this);
        this.onUserSubmit = this.onUserSubmit.bind(this);
    
        this.state = {
          emailAd : ''
        }
      }
    
      onChangeEmailAd(e){
        this.setState({emailAd : e.target.value})
      }
    
      onChangePw(e){
        this.setState({password: e.target.value})
      }

      onChangePwre(e){
        this.setState({password: e.target.value})
      }
      
    
      onUserSubmit(e){
        e.preventDefault();
    
        const RegisterObject = {
          email : this.state.emailAd,
          password : this.state.password,
        };
        
        console.log(RegisterObject);
        axios
          .post('http://localhost:4000/register/signin', RegisterObject)
          .then(res => console.log(res.data));
          
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
                <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Reset Password</h3>

                    <div className="text-center">
                    Already know password?{" "}
                    <a href="/Login">Log-in</a>
                    
                    </div>

                    <div className="form-group-mt">
                        <label>Email Address</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        value={this.state.emailAd} onChange={this.onChangeEmailAd}
                        />
                    </div>

                    <div className="form-group-mt">
                        <label>new Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter new password"
                        value={this.state.emailAd} onChange={this.onChangePw}
                        />
                    </div>

                    <div className="form-group-mt">
                        <label>re-enter Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="re-enter password"
                        value={this.state.emailAd} onChange={this.onChangePwre}
                        />
                    </div>

                    <div className="form-group-mt">
                        <label>OTP code</label>
                        <input
                        type="code"
                        className="form-control mt-1"
                        placeholder="Enter OTP code"
                        />
                    </div> 

                   

                     <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                        Confirm
                        </button>
                    </div>

                    <p className="forgot-password text-right mt-2">
                        Not Register yet? <a href="/Signin">Sign-Up</a>
                    </p>

                </div>
                </form>
            </div>
        </div>

        </div>
    
    );
  }
}

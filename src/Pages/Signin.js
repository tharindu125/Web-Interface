import React, { Component } from 'react'
import img2 from "../image/img2.jpg";
import Login from './Login';



export default class Signin extends Component {
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
                    <h3 className="Auth-form-title">Sign-Up</h3>

                <div className="text-center">
                Already registered?{" "}
                <a href="/Login">Log-in</a>
                
                </div>

                <div className="form-group-mt">
                    <label>Full Name</label>
                    <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter Full Name"
                    />
                </div>

                <div className="form-group-mt">
                    <label>Email Address</label>
                    <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter Email"
                    />
                </div>

                <div className="form-group-mt">
                    <label>Password</label>
                    <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    />
                </div>

                <div className="d-grid gap-2 mt-3">
                    
                        <button type="submit" className="btn btn-primary">
                        Sign-Up
                        </button>
                    
                </div>

                <p className="forgot-password text-right mt-2">
                    Forgot <a href="/Forgotpw">password?</a>
                </p>

                </div>
                </form>
            </div>
        </div>
      </div>

    )
  }
}


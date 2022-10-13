import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import img2 from "../image/img2.jpg";
import { Button } from 'react-bootstrap';



export default class About extends Component {


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
              <h3 className="Auth-form-title">Log-In</h3>

              <div className="text-center">
                Not registered yet?{" "}
                <a href="/Signin">Sign-in</a>
                
              </div>

              <div className="form-group-mt">
                <label htmlFor='email'>Email address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control mt-1"
                  placeholder="Enter email"

                />
              </div>

              <div className="form-group-mt">
                <label htmlFor='password'>Password</label>
                <input
                  type="password"
                  id="password"  
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>

              <div className="d-grid gap-2 mt-3">
                <Button  type="submit" block="block" size="lg">
                  Log-In
                </Button>
              </div>

              <p className="forgot-password text-right mt-2">
                Forgot <a href="/Forgotpw">password?</a>
              </p>

            </div>
          </form>
        </div>
      </div>
      </div>

    );
  }
}


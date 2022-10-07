import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import img2 from "../image/img2.jpg";

// import { Route, 
//   BrowserRouter as Router, 
//   Routes 
// } from 'react-router-dom';

//import Signin from './Signin';
//import Forgotpw from './Forgotpw';


export default class Login extends Component {
  render() {
    return (
      // <Router>
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
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
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
                  Log-In
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

      /* <div>
      <Routes>
        <Route path="/Login/Signin" component={Signin}/>
        <Route path="/Login/Forgotpw" component={Forgotpw}/>
      </Routes>
      </div>

      </Router> */
    );
  }
}

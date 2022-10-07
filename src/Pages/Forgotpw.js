import React, { Component } from 'react';
import img2 from "../image/img2.jpg";

export default class Forgotpw extends Component {
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
                        />
                    </div>

                    <div className="form-group-mt">
                        <label>new Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter new password"
                        />
                    </div>

                    <div className="form-group-mt">
                        <label>re-enter Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="re-enter password"
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

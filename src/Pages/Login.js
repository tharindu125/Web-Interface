import {useState, useEffect , useRef} from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import img2 from "../image/img2.jpg";

const Login = () => {

const useRef = useRef();
const errRef = useRef();

const [user, setUser] = useState('');
const [pwd, setPwd] = useState('');
const [errMsr, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);

useEffect(() => {
  useRef.current.focus();
}, [])

useEffect(() => {
  setErrMsg('');
}, [user, pwd])

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
                <label htmlFor='email'>Email address</label>
                <input
                  type="email"
                  id="email"
                  ref={userref}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  className="form-control mt-1"
                  placeholder="Enter email"

                />
              </div>

              <div className="form-group-mt">
                <label htmlFor='password'>Password</label>
                <input
                  type="password"
                  id="password"  
                  onChange={(e) => setpwd(e.target.value)}
                  value={pwd}
                  required
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


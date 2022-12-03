import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from '../Pages/About';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signin from '../Pages/Signin';
import Forgotpw from '../Pages/Forgotpw';
import Form from '../Pages/Form';
import './Navbarcomp.css';

export default class Navbarcomp extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container>
          
          <Navbar.Brand href="/">Heart-Care</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">          
            <Nav >
              {/* <Nav.Link as={Link} to={"/"}>Home</Nav.Link> */}
              <Nav.Link as={Link} to={"/Login"}>Log-In</Nav.Link>
              <Nav.Link as={Link} to={"/Signin"}>Sign-up</Nav.Link>
              
    
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" >

              <NavDropdown.Item href="/Forgotpw">Forgot password</NavDropdown.Item>
              
              <NavDropdown.Item href="/About">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Form">Form</NavDropdown.Item>

              </NavDropdown>
              
              

            </Nav>
          </Navbar.Collapse>

        </Container>
        </Navbar>
      </div>
      
      <div>

        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Forgotpw" element={<Forgotpw/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Form" element={<Form/>}/>
        </Routes>

      </div>
      </Router>
    );
  }
}

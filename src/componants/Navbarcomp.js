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
              <Nav.Link as={Link} to={"/Signin"}>Sign-In</Nav.Link>

    
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" >

              <NavDropdown.Item href="/Forgotpw">Forgotpw</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>

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
        </Routes>

      </div>
      </Router>
    );
  }
}

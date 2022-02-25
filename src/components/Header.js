import React from "react";
import "./components.css";
import img1 from "../images/van.png";
import {Link,useHistory} from 'react-router-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'

function Header() {

  let user=JSON.parse(localStorage.getItem('user-info'))

  const history=useHistory(); 
  function logOut(){
    localStorage.clear();
    history.push("/login")
  }
  
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark" className="navbarr">

    <Navbar.Brand href="/home" className="logo"> 
    DELIVERY
            <img
            src={img1}
            width="80"
            height="45"
            className="d-inline-block align-top"
            alt=""
          />
          </Navbar.Brand>
      <Nav className="me-auto ">

        {
          localStorage.getItem('user-info') ?
          <>
        <div className="add">
        <Link to="/add" className="btn btn-info">Add Deposit</Link>
        </div>
        <div className="u">
        <Link to="/deposit" className="btn btn-secondary">Deposits</Link>
        </div>
        <div className="logout">
        <NavDropdown title={user && user.name}>
          <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
        </NavDropdown>
        </div>
        </>
        :
        <>
        <div className="register">
        <Link to="/register" className="btn btn-warning">Register</Link>
        </div>
        <div className="login">
        <Link to="/login" className="btn btn-success">Login</Link>
        </div>
        </>
        }
      </Nav>

</Navbar>


{/* 
        <div className="logo">
        <a class="navbar-brand" href="#">

          Delivery
          <img
            src={img1}
            width="80"
            height="45"
            class="d-inline-block align-top"
            alt=""
          />
        </a>
        </div> */}



{/*         
        <div className="register">
        <button type="button" class="btn btn-warning">Register</button>
        </div>
        <div className="btn login">
        <button type="button" class="btn btn-success">Login</button>
        </div> */}
     
    </div>
  );
}

export default Header;

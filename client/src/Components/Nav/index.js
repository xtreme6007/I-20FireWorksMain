import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import Axios from "axios";
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function NavHeader() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [logedInStatus, setLogedInStatus] = useState([])

  useEffect(() => {
    Axios.get("/api/login").then((response)=> {
      if(response.data.LoggedIn == true){
          setLogedInStatus(response.data.User[0].user_name)
      }
  })
  })

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">I-20 Fireworks</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/search">Shop</Nav.Link>
          {logedInStatus === "Preston_Nichols" ? (
            // <Nav.Link href="/admin/postNew">Admin</Nav.Link>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
            <NavDropdown.Item href="/admin/postNew">Post New Product</NavDropdown.Item>
            <NavDropdown.Item href="/admin/viewProd">View Product Information</NavDropdown.Item>
          </NavDropdown>
          ) : null}
        </Nav>
        <Nav>
          { logedInStatus == "" || !logedInStatus ?
          <Nav.Link href="/login">Login</Nav.Link> :
          null
}
        </Nav>
        <Nav>
          { logedInStatus == "" || !logedInStatus ?
          <Nav.Link href="/register">Register</Nav.Link> :
          null
}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

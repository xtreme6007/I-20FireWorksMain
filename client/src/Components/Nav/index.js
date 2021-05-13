import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function NavHeader() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [logedInStatus, setLogedInStatus] = useState([])

  useEffect(() => {
    Axios.get("/api/login").then((response)=> {
      // console.log(response)
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
            <Nav.Link href="/admin/postNew">Admin</Nav.Link>
          ) : null}
        </Nav>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

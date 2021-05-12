import Reactg from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavHeader() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">I-20 Fireworks</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/search">Shop</Nav.Link>
          {isAuthenticated ? (
            <Nav.Link href="/admin/postNew">Admin</Nav.Link>
          ) : null}
        </Nav>
        <Nav>
          <Nav.Link
            href="#deets"
            onClick={() => {
              isAuthenticated ? logout() : loginWithRedirect();
            }}
          >
            {isAuthenticated ? "LogOut" : "Login"}
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

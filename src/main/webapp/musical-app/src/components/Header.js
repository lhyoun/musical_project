import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">JEJ MUSICAL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/MusicalAdd">뮤지컬 등록</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/Register">SIGN UP</Nav.Link>
            <Nav.Link href="/Login">
              SIGN IN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br /><br /><br />
    </>
  );
};

export default Header;
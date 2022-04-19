import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../csscomponents/navigation.css";
function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" className="navigation">
      <Container>
        <Navbar.Brand href="/" text="white" className="logo">
          WHERETO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="navA">
              Home
            </Nav.Link>
            <NavDropdown
              title="Restaurant"
              id="basic-nav-dropdown"
              className="navA"
            >
              <NavDropdown.Item href="/restaurants" className="navA">
                Find a restaurant
              </NavDropdown.Item>
              <NavDropdown.Item href="/bars" className="navA">
                Find a bar
              </NavDropdown.Item>
              <NavDropdown.Item href="/activities" className="navA">
                Find an activity
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/spots/create" className="navA">
                Submit a spot
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/about" className="navA">
              About
            </Nav.Link>
            <Nav.Link href="/submit" className="navA">
              Contact
            </Nav.Link>
            <Nav.Link href="/login" className="navA">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

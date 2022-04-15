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
        <Navbar.Brand href="/" text="white">
          NY SPOTS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Restaurant" id="basic-nav-dropdown">
              <NavDropdown.Item href="/restaurants">
                Find A Restaurant
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Find A Bar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Find An Acitivity
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/spots/create">
                Submit A Spot
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="/submit">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

"use client";
import Link from "next/link";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function MovieNavbar() {
  let [isLoggin] = useState(false);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary MovieNavbar"
    >
      <Container fluid>
        <Link href={"/"} className="logo">
          ASR<span>CINIMA</span>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="Menu-Lies" href="#Films">
              Films
            </Nav.Link>
            <Nav.Link className="Menu-Lies" href="#Series">
              Series
            </Nav.Link>
            <Nav.Link className="Menu-Lies" href="#Anime And Cartoon">
              Anime And Cartoon
            </Nav.Link>
            <NavDropdown
              className="Menu-Lies"
              title="More"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Books</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ramadan 2024
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                tv programs
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Wrestling</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {isLoggin ? (
              "Abdallh Sabry"
            ) : (
              <Link href="/Login" className="login-btn">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MovieNavbar;

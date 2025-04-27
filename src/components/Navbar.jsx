import React, { useState } from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Navbar.css"; 
import logo from "../assets/logo-final.png";

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={(isOpen) => setExpanded(isOpen)}
      style={{ backgroundColor: "#550000" }} // Dark maroon background
    >
      <BootstrapNavbar.Brand
        as={Link}
        to="home"
        smooth={true}
        duration={500}
        onClick={handleNavClick}
        className="d-flex align-items-center justify-content-center text-white"
      >
        <img
          src={logo}
          alt="MK Engineering Logo"
          style={{ width: "80px", height: "60px" }}
        />
      </BootstrapNavbar.Brand>

      <BootstrapNavbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
      />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            as={Link}
            to="home"
            smooth={true}
            duration={500}
            onClick={handleNavClick}
            className="text-white"
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="about"
            smooth={true}
            duration={500}
            onClick={handleNavClick}
            className="text-white"
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="services"
            smooth={true}
            duration={500}
            onClick={handleNavClick}
            className="text-white"
          >
            Services
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="why-us"
            smooth={true}
            duration={500}
            onClick={handleNavClick}
            className="text-white"
          >
            Why Us
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="contact"
            smooth={true}
            duration={500}
            onClick={handleNavClick}
            className="text-white"
          >
            Contact
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;

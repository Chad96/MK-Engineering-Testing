import React, { useState } from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Navbar.css"; // Import the CSS

function Navbar() {
  const [expanded, setExpanded] = useState(false); // State to track collapse

  // Function to handle link clicks and close the collapse
  const handleNavClick = () => {
    setExpanded(false); // Close the collapse
  };

  return (
    <BootstrapNavbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded} // Control collapse state
      onToggle={(isOpen) => setExpanded(isOpen)} // Update state when toggled
    >
      <BootstrapNavbar.Brand as={Link} to="home" smooth={true} duration={500} onClick={handleNavClick}>
        MK Engineering
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            as={Link}
            to="home"
            smooth={true}
            duration={500}
            onClick={handleNavClick} // Close on click
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="about"
            smooth={true}
            duration={500}
            onClick={handleNavClick} // Close on click
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="services"
            smooth={true}
            duration={500}
            onClick={handleNavClick} // Close on click
          >
            Services
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="why-us"
            smooth={true}
            duration={500}
            onClick={handleNavClick} // Close on click
          >
            Why Us
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="contact"
            smooth={true}
            duration={500}
            onClick={handleNavClick} // Close on click
          >
            Contact
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import HeroBg from "../assets/hero.jpg";
import "./Home.css"; // Import the CSS

function Home() {
  return (
    <section id="home" className="home-section d-flex align-items-center justify-content-center">
      <Container fluid className="p-0">
        <Row className="text-center w-100 m-0">
          <Col>
            <h1 className="display-4">
              <strong>MK Engineering Services SA</strong>
            </h1>
            <p className="lead">
              <strong>Engineering | Supply | Management</strong>
            </p>
            <p className="mb-4">
              Empowering businesses with innovative engineering solutions.
            </p>
            <Button
              variant="primary"
              as={Link}
              to="contact"
              smooth={true}
              duration={500}
              className="home-button"
            >
              Get in Touch
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
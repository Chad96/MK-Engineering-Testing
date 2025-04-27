import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Home.css"; // Import the CSS

function Home() {
  return (
    <section id="home" className="home-section d-flex align-items-center justify-content-center">
      <Container fluid className="p-0">
        <Row className="text-center w-100 m-0">
          <Col>
            <h1 className="display-4 strait-regular fade-in">
              <strong>MK Engineering Services SA</strong>
            </h1>
            <p className="lead strait-regular fade-in" style={{ animationDelay: "0.5s" }}>
              <strong>Engineering | Supply | Management</strong>
            </p>
            <p className="mb-4 fade-in" style={{ animationDelay: "1s" }}>
              Empowering businesses with innovative engineering solutions.
            </p>
            <Button
              variant="primary"
              as={Link}
              to="contact"
              smooth={true}
              duration={500}
              className="home-button fade-in"
              style={{ animationDelay: "1.5s" }}
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OptImage from "../assets/why.jpg"; // Import the image
import "./WhyUs.css"; // Import the CSS

function WhyUs() {
  return (
    <section id="why-us" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <Row>
          <Col md={3} className="mb-4 why-us-item">
            <h4>Tailored Solutions</h4>
            <p>We understand that every client has unique needs, and we design customized strategies to meet their specific challenges.</p>
          </Col>
          <Col md={3} className="mb-4 why-us-item">
            <h4>Expertise & Innovation</h4>
            <p>Our team brings cutting-edge knowledge and innovative thinking to engineering solutions.</p>
          </Col>
          <Col md={3} className="mb-4 why-us-item">
            <h4>Commitment to Quality</h4>
            <p>We prioritize excellence, reliability, and efficiency in every project we undertake.</p>
          </Col>
          <Col md={3} className="mb-4 why-us-item">
            <h4>Client-Centric Approach</h4>
            <p>We build long-term partnerships by ensuring transparency, responsiveness, and customer satisfaction.</p>
          </Col>
        </Row>
        <div className="why-us-image mt-5">
          <img
            src={OptImage} // Use the imported image
            alt="Why Us Illustration"
            className="img-fluid"
          />
        </div>
      </Container>
    </section>
  );
}

export default WhyUs;
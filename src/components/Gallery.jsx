import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.css'; // ✅ Import your new CSS file

const Gallery = () => {
  return (
    <section id="why-us" className="why-us-gallery">
      <Container>
        <h2 className="text-center">Our Gallery</h2>
        <Row>
          <Col md={6} lg={3} className="mb-4">
            <div className="gallery-item gallery-1"></div>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <div className="gallery-item gallery-2"></div>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <div className="gallery-item gallery-3"></div>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <div className="gallery-item gallery-4"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;

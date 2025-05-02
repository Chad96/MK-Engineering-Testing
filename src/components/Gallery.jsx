import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Gallery.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="why-us" className="why-us-gallery">
      <Container>
        <h2 className="text-center">Our Gallery</h2>
        <Row>
          <Col md={6} lg={3} className="mb-4" data-aos="fade-up">
            <div className="gallery-item gallery-1"></div>
          </Col>
          <Col md={6} lg={3} className="mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="gallery-item gallery-2"></div>
          </Col>
          <Col md={6} lg={3} className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="gallery-item gallery-3"></div>
          </Col>
          <Col md={6} lg={3} className="mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="gallery-item gallery-4"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;

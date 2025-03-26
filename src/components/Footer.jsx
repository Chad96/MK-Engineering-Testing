import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} MK Engineering Services SA. All rights reserved.</p>
            <p>
              <a href="mailto:info@mkengineeringsa.com" className="text-white">
                info@mkengineeringsa.com
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
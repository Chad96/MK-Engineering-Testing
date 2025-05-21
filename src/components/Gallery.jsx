import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Gallery.css';

const images = [
  { id: 1, class: 'gallery-1', src: '/assets/pics/7.jpeg' },
  { id: 2, class: 'gallery-2', src: '/assets/pics/4.jpeg' },
  { id: 3, class: 'gallery-3', src: '/assets/pics/5.jpeg' },
  { id: 4, class: 'gallery-4', src: '/assets/pics/8.jpeg' },
];

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  return (
    <section id="why-us" className="why-us-gallery">
      <Container>
        <h2 className="text-center">Gallery</h2>
        <Row>
          {images.map((img, index) => (
            <Col
              key={img.id}
              md={6}
              lg={3}
              className="mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`gallery-item ${img.class}`}
                onClick={() => handleImageClick(index)}
                style={{ cursor: 'pointer' }}
              ></div>
            </Col>
          ))}
        </Row>

        {/* Image Slider Modal */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          size="lg"
          className="gallery-modal"
        >
          <Modal.Body className="p-0">
            <Carousel activeIndex={activeIndex} onSelect={setActiveIndex} interval={null}>
              {images.map((img) => (
                <Carousel.Item key={img.id}>
                  <img
                    className="d-block w-100"
                    src={img.src}
                    alt={`Slide ${img.id}`}
                    style={{ borderRadius: '10px' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Gallery;

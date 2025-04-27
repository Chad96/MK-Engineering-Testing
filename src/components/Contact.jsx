import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formspreeUrl = "https://formspree.io/f/xeoazbvq";

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Error submitting form. Please try again later.");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 animate-on-scroll">Reach Out</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="text-center intro-text animate-on-scroll">
              For inquiries or partnership opportunities, use the form below or
              email us at{" "}
              <a href="mailto:info@mkengineeringsa.com" className="email-link">
                info@mkengineeringsa.com
              </a>
              . We respond within 24 hours.
            </p>
            <Form onSubmit={handleSubmit} className="contact-form animate-on-scroll">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>
                  <FaUser className="me-2" /> Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>
                  <FaEnvelope className="me-2" /> Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>
                  <FaCommentDots className="me-2" /> Message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit" className="submit-btn">
                  Send Message
                </Button>
              </div>
              {status && (
                <div className="text-center mt-3">
                  <p
                    className={`status-message ${
                      status.includes("Error") || status.includes("Oops")
                        ? "error"
                        : "success"
                    }`}
                  >
                    {status}
                  </p>
                </div>
              )}
            </Form>

            <div className="mt-4 map-container animate-on-scroll">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.1453458186998!2d18.51180797570932!3d-33.88591037322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5c0464c120ed%3A0x521ea05c9d0c629c!2sWaterstone%20W%2C%20Century%20City%2C%20Cape%20Town%2C%207441!5e0!3m2!1sen!2sza!4v1743010637875!5m2!1sen!2sza"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location - Waterstone W, Century City"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

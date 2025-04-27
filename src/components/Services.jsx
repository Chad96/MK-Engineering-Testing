import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ServicesBg from "../assets/serv.jpg";
import ConsultingImg from "../assets/con-1.jpg";
import SupplyImg from "../assets/supply.jpg";
import ManagementImg from "../assets/manage.jpg";
import CombinedImg from "../assets/black-1.jpg"; // Replace with your actual image
import "./Services.css";

function Services() {
  const services = [
    {
      title: "Engineering Consulting",
      image: ConsultingImg,
      items: [
        "Mechanical parts/equipment design",
        "Waste water & water treatment plants design",
        "Technical advisory and feasibility studies",
        "System design and optimization",
        "Process improvement and troubleshooting",
        
        
        
      ],
    },
    {
      title: "Product Supply",
      image: SupplyImg,
      items: [
        "Pumps & Spares(self-priming pumps, high-pressure centrifugal pumps, etc..)",
        "Sourcing high-quality engineering components and materials",
        "Supply chain management and logistics solutions",
        "Vendor evaluation and procurement consulting",
        
      ],
    },
    {
      title: "Project Management",
      image: ManagementImg,
      items: [
        "End-to-end project planning and execution",
        "Risk assessment and mitigation strategies",
        "Budgeting, scheduling, and quality control",
      ],
    },
  ];

  // For the fade-in effect
  const combinedSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Start fading when 30% of section is visible
      }
    );

    if (combinedSectionRef.current) {
      observer.observe(combinedSectionRef.current);
    }

    return () => {
      if (combinedSectionRef.current) {
        observer.unobserve(combinedSectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-5">
      <Container>
        {/* Existing Services Section */}
        <h2 className="text-center">Our Services</h2>
        <p className="text-center">
          At MK Engineering Services SA, we offer a range of tailored engineering solutions, including:
        </p>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={service.image} alt={service.title} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <ul>
                    {service.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Combined Process Optimization and Our Team Section */}
        <Row
          className={`mt-5 combined-section ${isVisible ? "visible" : ""}`}
          ref={combinedSectionRef}
        >
          <Col md={6} className="mb-4 mb-md-0">
            <div className="combined-section-content">
              <div className="optimization-section">
                <h2 className="text-center text-md-start">Process Optimization</h2>
                <p>
                  We collaborate with organizations to optimize operations, reduce costs, and enhance productivity.
                  Our experts conduct in-depth analyses of existing processes, identify inefficiencies,
                  and implement best practices that drive efficiency and improve overall profitability.
                </p>
              </div>
              <div className="team-section mt-4">
                <h2 className="text-center text-md-start">Our Team</h2>
                <p>
                  Our team is composed of highly skilled engineers, project managers, and industry experts
                  who bring a wealth of experience in delivering engineering excellence.
                  With a deep understanding of industry best practices, we work closely with our clients
                  to ensure every project is executed with precision, efficiency, and innovation.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <img
              src={CombinedImg}
              alt="Process Optimization and Our Team"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;

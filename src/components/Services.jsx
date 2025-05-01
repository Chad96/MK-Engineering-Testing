import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ServicesBg from "../assets/serv.jpg";
import ConsultingImg from "../assets/con-1.jpg";
import SupplyImg from "../assets/supply.jpg";
import ManagementImg from "../assets/manage.jpg";
import CombinedImg from "../assets/black-1.jpg"; 
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
        "Pumps & Spares (self-priming pumps, high-pressure centrifugal pumps, etc..)",
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

  const combinedSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    // Initial check
    checkMobile();

    // Update on window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Define styles based on the screen size
  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: isMobile ? '10px' : '20px',  // Adjust padding based on screen size
    marginTop: isMobile ? '5px' : '10px',     // Adjust margin based on screen size
  };

  const listItemStyle = {
    paddingLeft: isMobile ? '4px' : '8px',    // Adjust padding based on screen size
    textIndent: isMobile ? '-14px' : '-22px', // Adjust text indent for mobile
    marginBottom: isMobile ? '2px' : '6px',   // Adjust margin bottom for mobile
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
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
                  <ul style={listStyle}>
                    {service.items.map((item, i) => (
                      <li key={i} style={listItemStyle}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

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

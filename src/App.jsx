// src/App.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';  // Why Us section
import Gallery from './components/Gallery';  // New Gallery import
import Contact from './components/Contact';
import Footer from './components/Footer';  // New Footer import
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container fluid className="p-0">
        <Home />
        <About />
        <Services />
        <WhyUs />
        <Gallery /> {/* Gallery Section */}
        <Contact />
        <Footer />  
      </Container>
    </div>
  );
}

export default App;

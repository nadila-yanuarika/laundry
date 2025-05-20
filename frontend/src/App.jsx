// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Services from './components/Services';
import OrderForm from './components/OrderForm';
import About from './components/About';
import Footer from './components/Footer';
import Admin from './components/Admin';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">

        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <section id="home">
                <Hero />
              </section>
              <section id="steps">
                <Steps />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id="orderform">
                <OrderForm />
              </section>
              <section id="about">
                <About />
              </section>
              <Footer />
            </>
          } />
          <Route path="/admin" element={<Admin />} /> {/* Halaman admin */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

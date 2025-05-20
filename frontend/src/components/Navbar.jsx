import React, { useState } from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <span className="text-2xl font-bold text-primary ml-2">BersihBersinar</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-primary font-semibold text-lg transition duration-300">
            BERANDA
          </button>
          <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-primary font-semibold text-lg transition duration-300">
            LAYANAN KAMI
          </button>
          <button onClick={() => scrollToSection('orderform')} className="text-gray-600 hover:text-primary font-semibold text-lg transition duration-300">
            JADWALKAN PENJEMPUTAN
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-primary font-semibold text-lg transition duration-300">
            TENTANG KAMI
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-sm">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-primary font-semibold text-lg transition duration-300">
              BERANDA
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-primary font-semibold text-lg transition duration-300">
              LAYANAN KAMI
            </button>
            <button onClick={() => scrollToSection('orderform')} className="text-gray-600 hover:text-primary font-semibold text-lg transition duration-300">
              JADWALKAN PENJEMPUTAN
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-primary font-semibold text-lg transition duration-300">
              TENTANG KAMI
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

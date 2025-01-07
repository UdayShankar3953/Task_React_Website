import React, { useState } from "react";
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="/images/zysk-logo.png" alt="Zysk Logo" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-container ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li className="dropdown"><a href="#products">Products</a></li>
          <li className="dropdown"><a href="#resources">Resources</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </nav>

      {/* Profile Icon */}
      <div className="profile">
        <img src="/images/profile.png" alt="Profile" />
      </div>
    </header>
  );
};

export default Header;

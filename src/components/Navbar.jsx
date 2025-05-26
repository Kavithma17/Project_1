import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Link to the external CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">BloomWell</Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/checkin" className="navbar-link">Mood Check-In</Link>
          <Link to="/relax" className="navbar-link">Relax</Link>
          <Link to="/support" className="navbar-link">Support</Link>
        </div>

        {/* Button (Optional) */}
        <div className="navbar-button">
          <Link to="/get-started" className="get-started-btn">Get Started</Link>
        </div>

        {/* Hamburger Icon (Mobile - not functional yet) */}
        <div className="navbar-hamburger">
          <button>
            <span className="hamburger-icon">☰</span>
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

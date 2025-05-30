import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        
        <div className="navbar-logo">
          <Link to="/">BloomWell</Link>
        </div>

      
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/checkin" className="navbar-link">Mood Check-In</Link>
          <Link to="/relax" className="navbar-link">Relax</Link>
          <Link to="/support" className="navbar-link">Support</Link>
        </div>

        
        <div className="navbar-button">
          <Link to="/login" className="get-started-btn">Login</Link>
        </div>

       
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <span className="hamburger-icon">☰</span>
        </div>
      </div>

     
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
          <Link to="/checkin" className="navbar-link" onClick={closeMenu}>Mood Check-In</Link>
          <Link to="/relax" className="navbar-link" onClick={closeMenu}>Relax</Link>
          <Link to="/support" className="navbar-link" onClick={closeMenu}>Support</Link>
          <Link to="/login" className="get-started-btn" onClick={closeMenu}>Login</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

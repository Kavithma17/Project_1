import React from 'react';
import './Footer.css'; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = ({ id }) => {
  return (
    <footer id={id} className="footer-container">
      <div className="footer-content">
   
        <div className="footer-about">
        <h3>About Bloomwell</h3>
<p>
Bloomwell is a student-led initiative promoting mental wellness, self-care,
 and peer support. We create a safe, inclusive space for female students to 
 connect, heal, and grow — together. Through circles, events, and tools like MindHug, 
 we’re redefining campus mental health.
</p>

          
        </div>

       
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            
            <li>📞 Hotline: +94 11 9153492</li>
            <li>✉️ Email: info@bloomwell.lk</li>
          </ul>
        </div>

      
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>© 2025 BloomWell. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './Footer.style.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="/about" className="footer-link">About</a>
        <a href="#" className="footer-link">Contact</a>
        <a href="#" className="footer-link">Privacy Policy</a>
      </div>
      <div className="footer-copyright">
        &copy; Recipe App 2022
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <p>&copy; {currentYear}Takeru Kawakami</p>
    </footer>
  );
};

export default Footer;
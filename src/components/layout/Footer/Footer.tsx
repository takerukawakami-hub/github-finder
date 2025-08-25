import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <p>&copy; {currentYear} [あなたの名前]</p>
    </footer>
  );
};

export default Footer;
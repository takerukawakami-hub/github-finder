import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useTheme } from '../../../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();


  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/" className="logo">
          GitHub Finder
        </Link>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
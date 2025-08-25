import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  // ダークモード切替のロジックは後ほど実装します
  const handleThemeToggle = () => {
    console.log('ダークモードが切り替えられました');
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/" className="logo">
          GitHub Finder
        </Link>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <button onClick={handleThemeToggle} className="theme-toggle-btn">
            Dark Mode
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
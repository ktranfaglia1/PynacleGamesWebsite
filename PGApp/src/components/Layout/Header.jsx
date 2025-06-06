import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Header.css';
import logo from '../../assets/images/PG_logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Pynacle Games Logo" className="logo-image" />
          </Link>
        </div>
        <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/games" onClick={() => setIsMenuOpen(false)}>Games</Link></li>
            <li><Link to="/downloads" onClick={() => setIsMenuOpen(false)}>Downloads</Link></li>
            <li><Link to="/connect" onClick={() => setIsMenuOpen(false)}>Connect</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><a href="https://github.com/ktranfaglia1/PynacleGames" target="_blank" rel="noopener noreferrer">Source</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
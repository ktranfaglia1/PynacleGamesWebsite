import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Footer.css';
import logo from '../../assets/images/PG_logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Pynacle Games</h2>
          <p>Enjoy the peak of Python gaming</p>
          <img src={logo} alt="Pynacle Games Logo" className="footer-logo-image" />
        </div>

        <div className="footer-links">
          <div className="footer-column navigation">
            <h3>Pynacle Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/games">Games</Link></li>
              <li><Link to="/downloads">Downloads</Link></li>
              <li><Link to="/connect">Connect</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="https://github.com/ktranfaglia1/PynacleGames" target="_blank" rel="noopener noreferrer">Source</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Popular Games</h3>
            <ul>
              <li><Link to="/downloads?game=1">Connect Four</Link></li>
              <li><Link to="/downloads?game=3">Snake</Link></li>
              <li><Link to="/downloads?game=2">2048</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Connect</h3>
            <ul className="social-links">
              <li><a href="https://kyletranfaglia.top/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
              <li><a href="https://www.linkedin.com/in/kyle-tranfaglia-6564b42a4/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/ktranfaglia1" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Pynacle Games. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
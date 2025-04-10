import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Pynacle Games</h2>
          <p>Fun Python games for everyone</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/games">Games</Link></li>
              <li><Link to="/downloads">Downloads</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Popular Games</h3>
            <ul>
              <li><Link to="/games/python-adventure">Python Adventure</Link></li>
              <li><Link to="/games/snake-classic">Snake Classic</Link></li>
              <li><Link to="/games/space-shooter">Space Shooter</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Connect</h3>
            <ul className="social-links">
              <li><a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer">Discord</a></li>
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
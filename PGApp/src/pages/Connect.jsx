import React from 'react';
import '../assets/styles/Connect.css';
import headshot from '../assets/images/Headshot.jpg';

const Connect = () => {
  return (
    <div className="connect-page">
      <div className="connect-header">
        <div className="container">
          <h1>Connect with the Creator</h1>
          <p>The person behind Pynacle Games</p>
        </div>
      </div>

      <div className="container">
        <div className="creator-profile">
          <div className="creator-image">
            {/* Replace with your actual image path */}
            <img src={headshot} alt="Creator"/>
          </div>
          
          <div className="creator-info">
            <h2>Creator: Kyle Tranfaglia</h2>
            <p className="creator-bio">
              I'm a Salisbury University alumnus with dual Bachelor of Science degrees in Computer Science and Data Science. 
              My journey with Pynacle Games began during my senior year when I developed the 15 Puzzle as part of my AI coursework. 
              That initial project ignited my passion for game development using Python and PyQt/PySide for creating intuitive user interfaces.
            </p>
            
            <p className="creator-bio">
              What started as an academic exercise quickly evolved into an exploration of gaming principles, from optimality and 
              solvability in puzzle games to designing engaging experiences across different game genres. I'm particularly 
              passionate about crafting accessible, user-friendly interfaces that enhance the gaming experience for players of all skill levels.
            </p>
            
            <div className="creator-links">
              <h3>Connect with Me</h3>
              <ul>
                <li>
                  <a href="https://github.com/ktranfaglia1" target="_blank" rel="noopener noreferrer">
                    <i className="icon-github"></i> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kyle-tranfaglia-6564b42a4/" target="_blank" rel="noopener noreferrer">
                    <i className="icon-linkedin"></i> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://kyletranfaglia.top/" target="_blank" rel="noopener noreferrer">
                    <i className="icon-globe"></i> Portfolio Website
                  </a>
                </li>
                <li>
                  <a href="mailto:kyletranfaglia@gmail.com">
                    <i className="icon-envelope"></i> kyletranfaglia@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="creator-message">
              <p>I'm always open to feedback and suggestions for new games or improvements to existing ones.</p>
              <p>Feel free to reach out through any of the channels above!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
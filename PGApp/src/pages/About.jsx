import React from 'react';
import '../assets/styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1>About Pynacle Games</h1>
          <p>Free Python games for everyone to enjoy</p>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          <section className="about-section">
            <h2>The Story</h2>
            <p>Pynacle Games began as a passion project during my senior year at Salisbury University, 
               where I was pursuing dual Bachelor of Science degrees in Computer Science and Data Science. 
               It all started with the 15 Puzzle game, which was initially developed as a project for my AI course.</p>
            <p>What began as an academic exercise quickly evolved into a growing collection of games that 
               showcase both the versatility of Python for game development and my interest in creating 
               engaging, accessible gaming experiences.</p>
          </section>
          
          <section className="about-section">
            <h2>The Games</h2>
            <p>All games in the Pynacle collection are built using Python, specifically leveraging the PyQt5 
               library to create intuitive and responsive user interfaces. Our collection includes:</p>
            <ul>
              <li><strong>Puzzle Games:</strong> Games like the 15 Puzzle, 2048, and Connect Four that explore 
                  concepts of optimality and solvability</li>
              <li><strong>Arcade Games:</strong> Classic experiences like Snake that focus on quick reflexes and fun gameplay</li>
              <li><strong>AI-Enhanced Games:</strong> Co-op games feature AI opponents of varying difficulties, 
                  allowing you to play against friends locally or challenge computer-controlled opponents</li>
              <li><strong>Interactive Solutions:</strong> Puzzle games like 2048 and the Sliding Puzzle include AI solvers 
                  that can demonstrate strong and potentially optimal solutions</li>
            </ul>
          </section>
          
          <section className="about-section">
            <h2>The Approach</h2>
            <p>At Pynacle Games, there is a focus on creating experiences that are:</p>
            <ul>
              <li><strong>Free and Accessible:</strong> All games are free to download and easy to run on most modern computers</li>
              <li><strong>Educational:</strong> The games serve as examples of Python programming, game design, and AI implementation. If interested, check out the source code by clicking "Source" in the navigation bar!</li>
              <li><strong>User-Friendly:</strong> Prioritize creating intuitive interfaces that enhance the gaming experience</li>
              <li><strong>Algorithmically Interesting:</strong> Many games incorporate AI algorithms and explore computational concepts</li>
            </ul>
          </section>
          
          <section className="about-section">
            <h2>Looking Forward</h2>
            <p>While Pynacle Games initially focused on puzzle games that explore optimality and solvability, 
               there will be upcoming expansion to the collection to include more arcade-style games and branch into 
               additional categories. New games are in the works with anticipated improvements to existing ones.</p>
            <p>Have a suggestion for a game you would like to see added to the collection or an improvement to an existing one? Feel free to reach out on our Connect page!</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
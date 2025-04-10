import React from 'react';
import '../assets/styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1>About Pynacle Games</h1>
          <p>Learn more about our project and mission</p>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>Pynacle Games started as a passion project to create fun, accessible games using Python. 
               What began as simple experiments quickly evolved into a collection of engaging games 
               that showcase the possibilities of Python game development.</p>
            <p>Our mission is to share these games with others and inspire more people to 
               explore programming through game development.</p>
          </section>
          
          <section className="about-section">
            <h2>The Developer</h2>
            <p>Hi, I'm Kyle! I created Pynacle Games to combine my love for programming with game design.</p>
            <p>I'm passionate about creating games that are not only fun to play but also demonstrate 
               interesting programming concepts and techniques.</p>
          </section>
          
          <section className="about-section">
            <h2>Our Approach</h2>
            <p>All games in the Pynacle collection are built with Python, showcasing the versatility 
               of the language for game development. We focus on creating games that are:</p>
            <ul>
              <li>Fun and engaging</li>
              <li>Accessible to players of all skill levels</li>
              <li>Educational for those interested in programming</li>
              <li>Easy to run on most modern computers</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
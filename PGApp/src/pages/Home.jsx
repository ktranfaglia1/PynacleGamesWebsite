import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';
import ConnectFour_logo from '../assets/images/ConnectFour_logo.png'
import TwentyFortyEight_logo from '../assets/images/2048_logo.png'
import Snake_logo from '../assets/images/Snake_logo.png'

const Home = () => {
  // Featured games
  const featuredGames = [
    {
      id: 1,
      title: 'Connect Four',
      description: 'Classic two-player connection game where players drop colored discs into a vertical grid, each trying to be the first to form a line of four of their own colored pieces.',
      imageUrl: ConnectFour_logo,
    },
    {
      id: 2,
      title: '2048',
      description: 'Slide numbered tiles on a 4×4 grid, merging identical values to create higher numbers with the ultimate goal of reaching the elusive 2048 tile.',
      imageUrl: TwentyFortyEight_logo,
    },
    {
      id: 3,
      title: 'Snake',
      description: 'Control a growing serpent that slithers around the screen, consuming various pellets while avoiding collisions with itself and the boundaries.',
      imageUrl: Snake_logo,
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Pynacle Games</h1>
            <p>A collection of fun and engaging games built with Python</p>
            <div className="hero-buttons">
            <Link to="/games" className="btn btn-primary">Explore Games</Link>
            <Link to="/downloads" className="btn btn-secondary">Download Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="featured-games">
        <div className="container">
          <div className="slogan">
            <h2>Enjoy the Peak of Python Gaming!</h2>
          </div>
          <div className="section-header">
            <h1>Featured Games</h1>
            <p>Check out some of our most popular Python games</p>
          </div>
          <div className="game-cards">
            {featuredGames.map(game => (
              <div className="game-card" key={game.id}>
                <div className="game-image">
                  <img src={game.imageUrl} alt={game.title} />
                </div>
                <div className="game-details">
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                  <div className="game-actions">
                    <Link to={`/learn#${game.id}`} className="btn btn-sm">Learn More</Link>
                    <Link to={`/downloads?game=${game.id}`} className="btn btn-sm btn-download">Download</Link>
                  </div>
                </div> 
              </div> 
            ))}
          </div>
          <div className="view-all">
            <Link to="/games" className="btn btn-outline">View All Games</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Play?</h2>
            <p>Download our games and start playing today!</p>
            <Link to="/downloads" className="btn btn-cta">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
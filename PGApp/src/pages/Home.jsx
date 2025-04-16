import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';

const Home = () => {
  // Featured games - selected 3 from your actual games
  const featuredGames = [
    {
      id: 1,
      title: 'Connect Four',
      description: 'Classic two-player connection game where players drop colored discs into a vertical grid.',
      imageUrl: '/images/game1.jpg',
    },
    {
      id: 3,
      title: 'Snake',
      description: 'Control a growing snake as it moves around the screen collecting food while avoiding obstacles.',
      imageUrl: '/images/game3.jpg',
    },
    {
      id: 2,
      title: '2048',
      description: 'Slide numbered tiles on a grid to combine them and create a tile with the number 2048.',
      imageUrl: '/images/game2.jpg',
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
            <Link to="/games" onClick={() => setIsMenuOpen(false)} className="btn btn-primary">Explore Games</Link>
            <Link to="/downloads" onClick={() => setIsMenuOpen(false)} className="btn btn-secondary">Download Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="featured-games">
        <div className="container">
          <div className="section-header">
            <h2>Featured Games</h2>
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
                    <Link to={`/games/${game.id}`} className="btn btn-sm">Learn More</Link>
                    <Link to={`/downloads?game=${game.id}`} className="btn btn-sm btn-download">Download</Link>
                  </div>
                </div> 
              </div> 
            ))}
          </div>
          
          <div className="view-all">
          <Link to="/games" onClick={() => setIsMenuOpen(false)} className="btn btn-outline">View All Games</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Play?</h2>
            <p>Download our games and start playing today!</p>
            <Link to="/downloads" onClick={() => setIsMenuOpen(false)} className="btn btn-cta">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
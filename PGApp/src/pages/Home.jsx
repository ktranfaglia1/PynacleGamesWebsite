import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';

const Home = () => {
  // Sample featured games data - replace with your actual games
  const featuredGames = [
    {
      id: 1,
      title: 'Python Adventure',
      description: 'A text-based adventure game with multiple endings and interactive storytelling.',
      imageUrl: '/images/game1.jpg', // Add placeholder images to public/images
      downloadUrl: '/downloads/python-adventure.exe'
    },
    {
      id: 2,
      title: 'Snake Classic',
      description: 'A modern twist on the classic snake game with power-ups and multiple levels.',
      imageUrl: '/images/game2.jpg',
      downloadUrl: '/downloads/snake-classic.exe'
    },
    {
      id: 3,
      title: 'Space Shooter',
      description: 'Defend your ship against waves of alien attackers in this fast-paced arcade game.',
      imageUrl: '/images/game3.jpg',
      downloadUrl: '/downloads/space-shooter.exe'
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
                    <a href={game.downloadUrl} className="btn btn-sm btn-download">Download</a>
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
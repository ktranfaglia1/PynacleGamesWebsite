import React, { useState } from 'react';
import GameCard from '../components/UI/GameCard';
import '../assets/styles/Games.css';

const Games = () => {
  // Sample games data - replace with your actual games
  const allGames = [
    {
      id: 1,
      title: 'Python Adventure',
      description: 'A text-based adventure game with multiple endings and interactive storytelling.',
      imageUrl: '/images/game1.jpg',
      downloadUrl: '/downloads/python-adventure.exe',
      category: 'adventure'
    },
    {
      id: 2,
      title: 'Snake Classic',
      description: 'A modern twist on the classic snake game with power-ups and multiple levels.',
      imageUrl: '/images/game2.jpg',
      downloadUrl: '/downloads/snake-classic.exe',
      category: 'arcade'
    },
    {
      id: 3,
      title: 'Space Shooter',
      description: 'Defend your ship against waves of alien attackers in this fast-paced arcade game.',
      imageUrl: '/images/game3.jpg',
      downloadUrl: '/downloads/space-shooter.exe',
      category: 'arcade'
    },
    {
      id: 4,
      title: 'Python Quiz',
      description: 'Test your knowledge with this interactive quiz game covering various topics.',
      imageUrl: '/images/game4.jpg',
      downloadUrl: '/downloads/python-quiz.exe',
      category: 'educational'
    },
    {
      id: 5,
      title: 'Hangman Challenge',
      description: 'The classic word-guessing game with a Python twist and various difficulty levels.',
      imageUrl: '/images/game5.jpg',
      downloadUrl: '/downloads/hangman-challenge.exe',
      category: 'puzzle'
    },
    {
      id: 6,
      title: 'Memory Match',
      description: 'Train your memory by matching pairs of cards in this challenging puzzle game.',
      imageUrl: '/images/game6.jpg',
      downloadUrl: '/downloads/memory-match.exe',
      category: 'puzzle'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter games based on category and search term
  const filteredGames = allGames.filter(game => {
    const matchesCategory = activeCategory === 'all' || game.category === activeCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          game.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get unique categories
  const categories = ['all', ...new Set(allGames.map(game => game.category))];

  return (
    <div className="games-page">
      <div className="games-header">
        <div className="container">
          <h1>Our Games</h1>
          <p>Browse our collection of Python games and find your next favorite</p>
        </div>
      </div>

      <div className="container">
        <div className="games-filters">
          <div className="categories">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {filteredGames.length > 0 ? (
          <div className="games-grid">
            {filteredGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="no-games">
            <h3>No games found</h3>
            <p>Try changing your filters or search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;
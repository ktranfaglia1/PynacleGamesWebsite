import React, { useState } from 'react';
import GameCard from '../components/UI/GameCard';
import '../assets/styles/Games.css';

const Games = () => {
  // Updated games data with your actual games
  const allGames = [
    {
      id: 1,
      title: 'Connect Four',
      description: 'Classic two-player connection game where players drop colored discs into a vertical grid.',
      imageUrl: '/images/game1.jpg',
      downloadUrl: '/downloads/connect-four.exe',
      category: 'puzzle'
    },
    {
      id: 2,
      title: '2048',
      description: 'Slide numbered tiles on a grid to combine them and create a tile with the number 2048.',
      imageUrl: '/images/game2.jpg',
      downloadUrl: '/downloads/2048.exe',
      category: 'puzzle'
    },
    {
      id: 3,
      title: 'Snake',
      description: 'Control a growing snake as it moves around the screen collecting food while avoiding obstacles.',
      imageUrl: '/images/game3.jpg',
      downloadUrl: '/downloads/snake.exe',
      category: 'arcade'
    },
    {
      id: 4,
      title: 'Tic-tac-toe',
      description: 'The classic pen-and-paper game where players take turns marking X and O on a 3×3 grid.',
      imageUrl: '/images/game4.jpg',
      downloadUrl: '/downloads/tictactoe.exe',
      category: 'puzzle'
    },
    {
      id: 5,
      title: '15 Puzzle',
      description: 'Slide fifteen numbered tiles in a 4×4 grid to arrange them in numerical order.',
      imageUrl: '/images/game5.jpg',
      downloadUrl: '/downloads/15-puzzle.exe',
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
            <h3>No Games Found</h3>
            <p>Try changing your filters or search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;
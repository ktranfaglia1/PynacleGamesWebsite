import React, { useState } from 'react';
import GameCard from '../components/UI/GameCard';
import '../assets/styles/Games.css';
import ConnectFour_logo from '../assets/images/ConnectFour_logo.png'
import TwentyFortyEight_logo from '../assets/images/2048_logo.png'
import Snake_logo from '../assets/images/Snake_logo.png'
import TicTacToe_logo from '../assets/images/TicTacToe_logo.png'
import FifteenPuzzle_logo from '../assets/images/15Puzzle_logo.png'
import Chess_logo from '../assets/images/Chess_logo.png'

const Games = () => {
  // Updated games data with your actual games
  const allGames = [
    {
      id: 1,
      title: 'Connect Four',
      description: 'Classic two-player connection game where players drop colored discs into a vertical grid, each trying to be the first to form a line of four of their own colored pieces.',
      imageUrl: ConnectFour_logo,
      category: 'strategy'
    },
    {
      id: 2,
      title: '2048',
      description: 'Slide numbered tiles on a 4×4 grid, merging identical values to create higher numbers with the ultimate goal of reaching the elusive 2048 tile.',
      imageUrl: TwentyFortyEight_logo,
      category: 'puzzle'
    },
    {
      id: 3,
      title: 'Snake',
      description: 'Control a growing serpent that slithers around the screen, consuming various pellets while avoiding collisions with itself and the boundaries.',
      imageUrl: Snake_logo,
      category: 'arcade'
    },
    {
      id: 4,
      title: 'Tic-tac-toe',
      description: 'The classic pen-and-paper game where players take turns marking X and O on a 3×3 grid, each trying to be the first to place three of their symbols in a row.',
      imageUrl: TicTacToe_logo,
      category: 'strategy'
    },
    {
      id: 5,
      title: '15-Puzzle',
      description:'Slide 15 numbered tiles around a 4×4 grid by swapping them with an empty space, rearranging the scrambled pieces into numerical order.',
      imageUrl: FifteenPuzzle_logo,
      category: 'puzzle'
    },
    {
      id: 6,
      title: 'Chess',
      description:'A strategic game played on an 8×8 checkered grid where two opponents battle to trap the enemy king using an army of pieces with distinct movement patterns.',
      imageUrl: Chess_logo,
      category: 'strategy'
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
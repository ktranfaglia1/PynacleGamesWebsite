import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/GameCard.css';

const GameCard = ({ game }) => {
  const { id, title, description, imageUrl } = game;
  
  return (
    <div className="game-card">
      <div className="game-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="game-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="game-actions">
          <Link to={`/games/${id}`} className="btn btn-sm">Learn More</Link>
          <Link to={`/downloads?game=${id}`} className="btn btn-sm btn-download">Download</Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
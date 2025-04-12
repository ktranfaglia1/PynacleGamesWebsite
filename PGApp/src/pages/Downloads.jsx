import React, { useState } from 'react';
import '../assets/styles/Downloads.css';

const Downloads = () => {
  // Updated downloads data with your actual games
  const allDownloads = [
    {
      id: 1,
      title: 'Connect Four',
      version: '1.2.0',
      releaseDate: '2024-03-15',
      fileSize: '18 MB',
      description: 'Classic two-player connection game where players drop colored discs into a vertical grid.',
      requirements: 'Windows 10/11, macOS 12+, Python 3.8+ (optional)',
      downloadUrl: '/downloads/connect-four.exe',
      category: 'puzzle'
    },
    {
      id: 2,
      title: '2048',
      version: '1.3.2',
      releaseDate: '2024-04-02',
      fileSize: '16 MB',
      description: 'Slide numbered tiles on a grid to combine them and create a tile with the number 2048.',
      requirements: 'Windows 10/11, macOS 12+, Python 3.8+ (optional)',
      downloadUrl: '/downloads/2048.exe',
      category: 'puzzle'
    },
    {
      id: 3,
      title: 'Snake',
      version: '2.0.1',
      releaseDate: '2024-03-28',
      fileSize: '22 MB',
      description: 'Control a growing snake as it moves around the screen collecting food while avoiding obstacles.',
      requirements: 'Windows 10/11, macOS 12+, Python 3.8+ (optional)',
      downloadUrl: '/downloads/snake.exe',
      category: 'arcade'
    },
    {
      id: 4,
      title: 'Tic-tac-toe',
      version: '1.1.0',
      releaseDate: '2024-02-10',
      fileSize: '15 MB',
      description: 'The classic pen-and-paper game where players take turns marking X and O on a 3×3 grid.',
      requirements: 'Windows 10/11, macOS 12+, Python 3.8+ (optional)',
      downloadUrl: '/downloads/tictactoe.exe',
      category: 'puzzle'
    },
    {
      id: 5,
      title: '15 Puzzle',
      version: '1.0.3',
      releaseDate: '2024-03-05',
      fileSize: '17 MB',
      description: 'Slide fifteen numbered tiles in a 4×4 grid to arrange them in numerical order.',
      requirements: 'Windows 10/11, macOS 12+, Python 3.8+ (optional)',
      downloadUrl: '/downloads/15-puzzle.exe',
      category: 'puzzle'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  // Filter downloads based on category
  const filteredDownloads = allDownloads.filter(download => {
    return activeCategory === 'all' || download.category === activeCategory;
  });

  // Get unique categories
  const categories = ['all', ...new Set(allDownloads.map(download => download.category))];

  // Toggle expanded state
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="downloads-page">
      <div className="downloads-header">
        <div className="container">
          <h1>Game Downloads</h1>
          <p>Download our Python games as standalone executables - no installation required!</p>
        </div>
      </div>

      <div className="container">
        <div className="downloads-info">
          <div className="info-card">
            <h3>How to Install</h3>
            <ol>
              <li>Download the game executable for your operating system</li>
              <li>Double-click the downloaded file to run it</li>
              <li>No installation required - our games are portable!</li>
            </ol>
          </div>
          
          <div className="info-card">
            <h3>System Requirements</h3>
            <ul>
              <li>Windows 10 or later (64-bit)</li>
              <li>macOS 12.0 or later</li>
              <li>4GB RAM minimum</li>
              <li>1GB free disk space</li>
              <li>Python 3.8+ (optional, source code only)</li>
            </ul>
          </div>
        </div>

        <div className="downloads-categories">
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

        <div className="downloads-list">
          {filteredDownloads.map(download => (
            <div 
              key={download.id} 
              className={`download-item ${expandedId === download.id ? 'expanded' : ''}`}
            >
              <div className="download-header" onClick={() => toggleExpand(download.id)}>
                <h3>{download.title}</h3>
                <div className="download-meta">
                  <span className="download-version">v{download.version}</span>
                  <span className="download-size">{download.fileSize}</span>
                  <span className="download-expand-icon">
                    {expandedId === download.id ? '−' : '+'}
                  </span>
                </div>
              </div>
              
              <div className="download-details">
                <p className="download-description">{download.description}</p>
                <div className="download-info-grid">
                  <div className="download-info-item">
                    <span className="info-label">Release Date:</span>
                    <span className="info-value">{download.releaseDate}</span>
                  </div>
                  <div className="download-info-item">
                    <span className="info-label">Requirements:</span>
                    <span className="info-value">{download.requirements}</span>
                  </div>
                </div>
                <a href={download.downloadUrl} className="btn btn-download">
                  Download Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
import React, { useState } from 'react';
import '../assets/styles/Downloads.css';

const Downloads = () => {
  // Sample downloads data - replace with your actual game executables
  const allDownloads = [
    {
      id: 1,
      title: 'Python Adventure',
      version: '1.2.0',
      releaseDate: '2024-03-15',
      fileSize: '24 MB',
      description: 'A text-based adventure game with multiple endings and interactive storytelling.',
      requirements: 'Windows 10/11, macOS 12+, Python 3.8+ (optional)',
      downloadUrl: '/downloads/python-adventure.exe',
      category: 'adventure'
    },
    {
      id: 2,
      title: 'Snake Classic',
      version: '2.1.5',
      releaseDate: '2024-04-02',
      fileSize: '18 MB',
      description: 'A modern twist on the classic snake game with power-ups and multiple levels.',
      requirements: 'Windows 10/11, macOS 12+, Python 3.8+ (optional)',
      downloadUrl: '/downloads/snake-classic.exe',
      category: 'arcade'
    },
    {
      id: 3,
      title: 'Space Shooter',
      version: '1.0.3',
      releaseDate: '2024-03-28',
      fileSize: '36 MB',
      description: 'Defend your ship against waves of alien attackers in this fast-paced arcade game.',
      requirements: 'Windows 10/11, macOS 12+, Python 3.8+ (optional)',
      downloadUrl: '/downloads/space-shooter.exe',
      category: 'arcade'
    },
    {
      id: 4,
      title: 'Python Quiz',
      version: '1.1.2',
      releaseDate: '2024-02-10',
      fileSize: '15 MB',
      description: 'Test your knowledge with this interactive quiz game covering various topics.',
      requirements: 'Windows 10/11, macOS 12+, Python 3.8+ (optional)',
      downloadUrl: '/downloads/python-quiz.exe',
      category: 'educational'
    },
    {
      id: 5,
      title: 'Hangman Challenge',
      version: '1.3.0',
      releaseDate: '2024-01-25',
      fileSize: '20 MB',
      description: 'The classic word-guessing game with a Python twist and various difficulty levels.',
      requirements: 'Windows 10/11, macOS 12+, Python 3.8+ (optional)',
      downloadUrl: '/downloads/hangman-challenge.exe',
      category: 'puzzle'
    },
    {
      id: 6,
      title: 'Memory Match',
      version: '2.0.1',
      releaseDate: '2024-04-05',
      fileSize: '22 MB',
      description: 'Train your memory by matching pairs of cards in this challenging puzzle game.',
      requirements: 'Windows 10/11, macOS 12+, Python 3.8+ (optional)',
      downloadUrl: '/downloads/memory-match.exe',
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
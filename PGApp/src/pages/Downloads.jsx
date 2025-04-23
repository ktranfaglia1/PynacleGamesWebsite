import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/styles/Downloads.css';

const Downloads = () => {
  // Updated downloads data with your actual games
  const allDownloads = [
    {
      id: 1,
      title: 'Connect Four',
      releaseDate: '2024-03-15',
      fileSize: '18 MB',
      description: 'Classic two-player connection game where players drop colored discs into a vertical grid, each trying to be the first to form a line of four of their own colored pieces.',
      windowsUrl: '/downloads/connect-four.exe',
      linuxUrl: '/downloads/connect-four.AppImage',
      category: 'puzzle'
    },
    {
      id: 2,
      title: '2048',
      releaseDate: '2024-04-02',
      fileSize: '16 MB',
      description: 'Slide numbered tiles on a 4×4 grid, merging identical values to create higher numbers with the ultimate goal of reaching the elusive 2048 tile.',
      downloadUrl: '/downloads/2048.exe',
      linuxUrl: '/downloads/connect-four.AppImage',
      category: 'puzzle'
    },
    {
      id: 3,
      title: 'Snake',
      releaseDate: '2024-03-28',
      fileSize: '22 MB',
      description: 'Control a growing serpent that slithers around the screen, consuming various pellets while avoiding collisions with itself and the boundaries.',
      downloadUrl: '/downloads/snake.exe',
      linuxUrl: '/downloads/connect-four.AppImage',
      category: 'arcade'
    },
    {
      id: 4,
      title: 'Tic-tac-toe',
      releaseDate: '2024-02-10',
      fileSize: '15 MB',
      description: 'The classic pen-and-paper game where players take turns marking X and O on a 3×3 grid, each trying to be the first to place three of their symbols in a row.',
      downloadUrl: '/downloads/tictactoe.exe',
      linuxUrl: '/downloads/connect-four.AppImage',
      category: 'puzzle'
    },
    {
      id: 5,
      title: '15 Puzzle',
      releaseDate: '2024-03-05',
      fileSize: '17 MB',
      description:'Slide 15 numbered tiles around a 4×4 grid by swapping them with an empty space, rearranging the scrambled pieces into numerical order.',
      downloadUrl: '/downloads/15-puzzle.exe',
      linuxUrl: '/downloads/connect-four.AppImage',
      category: 'puzzle'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);
  
  // Get the query parameters
  const location = useLocation();
  
  // On component mount, check for game parameter in URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const gameId = params.get('game');
    
    if (gameId) {
      // Convert to number since IDs in your data are numbers
      const numericId = parseInt(gameId, 10);
      
      // Find the game in the downloads list
      const gameExists = allDownloads.some(download => download.id === numericId);
      
      if (gameExists) {
        // Set the expanded ID to show this game's dropdown
        setExpandedId(numericId);
        
        // Find the category of this game to set the active category
        const gameCategory = allDownloads.find(download => download.id === numericId)?.category;
        if (gameCategory) {
          setActiveCategory(gameCategory);
        }
        
        // Scroll to the expanded item (with a slight delay to ensure rendering)
        setTimeout(() => {
          const element = document.getElementById(`download-item-${numericId}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    }
  }, [location.search]);

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
          <p>Download our Python games as standalone executables</p>
        </div>
      </div>

      <div className="container">
        <div className="downloads-info">
          <div className="info-card">
            <h3>How to Install</h3>
            <ol>
              <li>Download the game executable for your operating system</li>
              <li>Create a folder in your drive to store the executable</li>
              <li>Copy the game executable from the downloads folder to the folder</li>
              <li>Double-click the executable file in its new location to launch the game</li>
              <li>Consider making a shortcut to place on your desktop!
                <ul>
                  <li><strong>Windows:</strong> Right-click the game executable in its folder, select "Send to" → "Desktop (create shortcut)"</li>
                  <li><strong>Linux:</strong> Right-click the executable, select "Create Link" or "Make Link", then move the link to your Desktop</li>
                </ul>
              </li>
            </ol>
          </div>
          
          <div className="info-card">
            <h3>System Requirements</h3>
            <ul>
              <li>Operating System:</li>
              <ul>
                  <li><strong>Windows:</strong> Windows 10/11</li>
                  <li><strong>Linux:</strong> Ubuntu 20.04+ recommended</li>
                  <li><strong>MacOS:</strong> Not currently supported</li>
              </ul>
              <li>Storage: 250MB minimum free space (All Games)</li>
              <li>RAM: 4GB minimum (8GB recommended)</li>
              <li>No Python installation required (all dependencies are bundled in the executable)</li>
              <li>Source Code Only: Python 3.9 for PyQt5 games and Python 3.11 for Pyside6 games with dependencies located in requirements.txt</li>
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
              id={`download-item-${download.id}`}
              className={`download-item ${expandedId === download.id ? 'expanded' : ''}`}
            >
              <div className="download-header" onClick={() => toggleExpand(download.id)}>
                <h3>{download.title}</h3>
                <div className="download-meta">
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
                </div>
                
                {/* Download buttons container */}
                <div className="download-buttons">
                  <a href={download.windowsUrl} className="btn btn-download">
                    <span className="btn-icon">🪟</span> Windows
                  </a>
                  <a href={download.linuxUrl} className="btn btn-download linux">
                    <span className="btn-icon">🐧</span> Linux
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
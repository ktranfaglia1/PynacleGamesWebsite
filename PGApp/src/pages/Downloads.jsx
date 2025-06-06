import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/styles/Downloads.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faLinux } from '@fortawesome/free-brands-svg-icons';

const Downloads = () => {
  const allDownloads = [
    {
      id: 1,
      title: 'Connect Four',
      releaseDate: '2025-04-07',
      windowsSize: '52 MB',
      linuxSize: '46 MB',
      description: 'Classic two-player connection game where players drop colored discs into a vertical grid, each trying to be the first to form a line of four of their own colored pieces.',
      windowsUrl: '/downloads/ConnectFour.exe',
      linuxUrl: '/downloads/ConnectFour.AppImage',
      category: 'strategy'
    },
    {
      id: 2,
      title: '2048',
      releaseDate: '2025-03-20',
      windowsSize: '52 MB',
      linuxSize: '46 MB',
      description: 'Slide numbered tiles on a 4×4 grid, merging identical values to create higher numbers with the ultimate goal of reaching the elusive 2048 tile.',
      windowsUrl: '/downloads/2048.exe',
      linuxUrl: '/downloads/2048.AppImage',
      category: 'puzzle'
    },
    {
      id: 3,
      title: 'Snake',
      releaseDate: '2025-01-22',
      windowsSize: '52 MB',
      linuxSize: '46 MB',
      description: 'Control a growing serpent that slithers around the screen, consuming various pellets while avoiding collisions with itself and the boundaries.',
      windowsUrl: '/downloads/Snake.exe',
      linuxUrl: '/downloads/Snake.AppImage',
      category: 'arcade'
    },
    {
      id: 4,
      title: 'Tic-tac-toe',
      releaseDate: '2025-02-05',
      windowsSize: '52 MB',
      linuxSize: '46 MB',
      description: 'The classic pen-and-paper game where players take turns marking X and O on a 3×3 grid, each trying to be the first to place three of their symbols in a row.',
      windowsUrl: '/downloads/Tic-Tac-Toe.exe',
      linuxUrl: '/downloads/Tic-Tac-Toe.AppImage',
      category: 'strategy'
    },
    {
      id: 5,
      title: '15 Puzzle',
      releaseDate: '2025-01-08',
      windowsSize: '52 MB',
      linuxSize: '46 MB',
      description:'Slide 15 numbered tiles around a 4×4 grid by swapping them with an empty space, rearranging the scrambled pieces into numerical order.',
      windowsUrl: '/downloads/15-Puzzle.exe',
      linuxUrl: '/downloads/15-Puzzle.AppImage',
      category: 'puzzle'
    },
    {
      id: 6, 
      title: 'Chess',
      releaseDate: '2025-04-19',
      windowsSize: '45 MB',
      linuxSize: '64 MB',
      description:'A strategic game played on an 8×8 checkered grid where two opponents battle to trap the enemy king using an army of pieces with distinct movement patterns.',
      windowsUrl: '/downloads/Chess.exe',
      linuxUrl: '/downloads/Chess.AppImage',
      category: 'strategy'
    },
    {
      id: 7, 
      title: 'All Games',
      releaseDate: '2025-04-29',
      windowsSize: '305 MB',
      linuxSize: '294 MB',
      description:'The entire Pynacle Games collection, all bundled up into one zip file.',
      windowsUrl: '/downloads/AllWindowsGames.zip',
      linuxUrl: '/downloads/AllLinuxGames.zip',
      category: 'all-games'
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
    if (activeCategory === 'all') {
      // When "all" is selected, show everything
      return true;
    } else {
      // For specific categories, exclude items with the "all-games" category
      return download.category === activeCategory && download.category !== 'all-games';
    }
  });

  // Get unique categories
  const categories = ['all', ...new Set(allDownloads
    .filter(download => download.category !== 'all-games')
    .map(download => download.category))];

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
              <li>Download the game executable for your operating system
                <ul> 
                  <li> It may get flagged as suspicious by your browser and require confirmation to download </li> 
                </ul>
              </li>
              <li>Create a folder in your drive to store the executable</li>
              <li>Copy the game executable from the downloads folder to the new folder</li>
              <li>Double-click the executable file in its new location to launch the game
                <ul> 
                  <li> It may get flagged as suspicious by your operating system and require confirmation to run </li> 
                </ul>
              </li>
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
              <li>Operating System:
                <ul>
                    <li><strong>Windows:</strong> Windows 10/11</li>
                    <li><strong>Linux:</strong> Ubuntu 20.04+ recommended</li>
                    <li><strong>MacOS:</strong> Not currently supported</li>
                </ul>
              </li>
              <li>Storage: ~300MB minimum free space (All Games)</li>
              <li>RAM: 4GB minimum (8GB recommended)</li>
              <li>No Python installation required (all dependencies are bundled in the executable)</li>
              <li>Source Code Only: Python 3.9 for PyQt5 games and Python 3.11 for Pyside6 games with dependencies located in requirements.txt</li>
              <li>Installation of X11 libraries may be required on some Linux systems</li>
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
                  <div className="download-sizes">
                    <span className="download-size"><span className="btn-icon"><FontAwesomeIcon icon={faWindows} style={{ color: '#0078D6' }} /></span>{download.windowsSize}</span>
                    <span className="download-size"><span className="btn-icon"><FontAwesomeIcon icon={faLinux} style={{ color: '#000000' }} /></span>{download.linuxSize}</span>
                  </div>
                  <span className="download-expand-icon">
                    {expandedId === download.id ? '-' : '+'}
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
                    <span className="btn-icon"><FontAwesomeIcon icon={faWindows} /></span> Windows
                  </a>
                  <a href={download.linuxUrl} className="btn btn-download linux">
                    <span className="btn-icon"><FontAwesomeIcon icon={faLinux} /></span> Linux
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
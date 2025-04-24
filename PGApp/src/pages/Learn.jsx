import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/styles/About.css';

const Learn = () => {
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash) {
        const id = location.hash;
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    }, [location]);
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1>Learn More</h1>
          <p>Dive deeper into our game collection</p>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          <section id="#1" className="about-section">
            <h2>Connect Four</h2>
            <p>Connect Four takes the classic two-player strategy game to the next level with multiple difficulty levels 
                and an intelligent AI system. Players can choose from five different modes: Local (two-player), Easy, 
                Medium, Hard, and Master. Each difficulty level offers a progressively more challenging AI opponent, 
                utilizing increasingly sophisticated algorithms to make strategic decisions.</p>
            <p>The game stands out with its colorful, modern interface and dynamic gameplay mechanics. The AI opponents 
                use different strategies based on difficulty, from completely random moves in Easy mode to complex 
                decision-making in Hard and Master modes. The implementation includes advanced AI techniques like move 
                evaluation, threat detection, and strategic positioning. Players can enjoy a visually appealing experience 
                with vibrant colored pieces and a sleek, modern design that brings the traditional game into the digital age.</p>
          </section>
          
          <section id="#2" className="about-section">
            <h2>2048</h2>
            <p>The 2048 game offers a sophisticated puzzle experience with multiple unique features. Players slide and merge 
                numbered tiles to create larger numbers, with the ultimate goal of reaching the 2048 tile. This version goes 
                beyond the basic gameplay with an intelligent AI solver that can automatically play the game using advanced 
                heuristic algorithms.</p>
            <p>The game features a complex scoring system, multiple move tracking, and a high-score tracking mechanism. 
                The AI solver uses sophisticated evaluation methods, including calculating board monotonicity, merge potential, 
                and smoothness. Players can watch the AI solve the puzzle or play manually, with the game providing real-time 
                move and score tracking. The visually appealing tile design and responsive controls make this a standout 
                version of the popular puzzle game.</p>
          </section>
          
          <section id="#3" className="about-section">
            <h2>Snake</h2>
            <p>This modern take on the classic Snake game introduces several innovative gameplay elements. Beyond the traditional 
                snake-growing mechanics, the game features multiple types of apples that add strategic depth. Green apples are 
                standard, silver apples offer more points, and gold apples provide the highest score. A unique purple "poison" 
                apple adds an extra layer of challenge, removing half the snake's body when consumed.</p>
            <p>The game includes a sophisticated scoring system, with different apple types awarding varying point values. The 
                snake's speed increases as it grows, adding progressively more difficulty. A high score tracking system allows 
                players to save and review their best performances. The sleek, minimalist design and responsive controls make this 
                version of Snake both nostalgic and modern.</p>
          </section>
          
          <section id="#4" className="about-section">
            <h2>Tic-tac-toe</h2>
            <p>This Tic-Tac-Toe implementation elevates the simple game with multiple AI difficulty levels and an intelligent 
                opponent system. Players can choose between Local (two-player) mode and three AI difficulty levels: Easy, Medium, 
                and Hard. The AI adapts its strategy based on the selected difficulty, from completely random moves to strategic 
                decision-making that blocks player wins and seeks optimal moves.</p>
            <p>The game features a visually appealing interface with color-coded moves and a winning line highlight. The AI opponents 
                use different strategies, including checking for immediate winning moves, blocking opponent wins, and making 
                strategically optimal choices. The Hard difficulty level introduces more advanced strategic play, making the game 
                challenging even for experienced players.</p>
          </section>

          <section id="#5" className="about-section">
            <h2>15-Puzzle</h2>
            <p>The Sliding Puzzle, also known as the 15-Puzzle, is a classic logic game that challenges players to rearrange numbered 
                tiles into their correct order. This implementation takes the traditional puzzle to new heights with an intelligent 
                solving algorithm and user-friendly features. The game uses the A* search algorithm to find the optimal solution, 
                which can solve even complex puzzle configurations efficiently.</p>
            <p>What makes this version unique is its built-in solver and comprehensive game mechanics. Players can attempt to solve 
                the puzzle manually or use the automatic solver to see the most efficient solution. The game ensures that every 
                generated puzzle is solvable through a sophisticated shuffling algorithm that checks puzzle solvability. Additional 
                features include a move counter, timer, and a clean, intuitive interface that makes solving the puzzle both 
                challenging and enjoyable.</p>
          </section>

          <section id="#6" className="about-section">
            <h2>Chess</h2>
            <p>Chess is a classic strategic board game reimagined with modern GUI features. This implementation goes beyond the 
                traditional chess experience by offering several unique enhancements. The game features an interactive SVG-rendered 
                board with dynamic highlighting of legal moves, making it more accessible for players of all skill levels. When a piece 
                is selected, the board immediately shows all possible moves for that piece, helping players understand their options.</p>
            <p>The interface includes several quality-of-life features that set it apart from traditional chess boards. A comprehensive 
                move history panel allows players to track every move made during the game. The board can be flipped, providing different 
                perspectives for players. The control panel includes convenient options like undoing moves and starting a new game, 
                making the experience more flexible and user-friendly. The game uses the powerful chess Python library to handle complex 
                chess logic, ensuring accurate move validation and game state tracking.</p>              
          </section>
        </div>
      </div>
    </div>
  );
};

export default Learn;
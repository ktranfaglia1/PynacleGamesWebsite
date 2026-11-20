# Pynacle Games Website

**The React site for [Pynacle Games](https://github.com/ktranfaglia1/PynacleGames), live at [pynaclegames.org](https://pynaclegames.org).**

Pynacle Games is a set of six desktop games written in Python, several with AI opponents or solvers. This site is where people browse the games, download builds for their operating system, and read how each game and its AI works.

## Pages

| Route | Page | What it does |
|---|---|---|
| `/` | Home | Introduction, featured games, and a call to download |
| `/games` | Games | The full collection, with a search box and filters for strategy, puzzle and arcade games |
| `/learn` | Learn | A documentation section for each game (Connect Four, 2048, Snake, Tic-Tac-Toe, 15-Puzzle, Chess): rules, controls and the algorithms behind the AI |
| `/downloads` | Downloads | Builds for Windows, macOS and Linux, with step-by-step install and shortcut instructions for each OS |
| `/about` | About | The project's goals: free, easy-to-use and algorithmically interesting games |
| `/connect` | Connect | About the developer and how to get in touch |

## Tech stack

- **React 19**, with client-side routing by **React Router 7**
- **Vite 6** for development and production builds
- **Font Awesome** icons
- **CSS** split into one stylesheet per component and page
- **ESLint** with the React Hooks and React Refresh plugins

## Running locally

The app lives in `PGApp/`:

```bash
cd PGApp
npm install
npm run dev       # development server at http://localhost:5173
npm run build     # production build to PGApp/dist
npm run preview   # serve the production build
```

The site uses client-side routing, so a production host has to send unknown paths to `index.html` for direct links such as `/learn` to work.

## Repository structure

```
PGApp/
├── index.html
├── vite.config.js
└── src/
    ├── main.jsx, App.jsx        # Entry point and routes
    ├── pages/                   # Home, Games, Learn, Downloads, About, Connect
    ├── components/
    │   ├── Layout/              # Header, Footer
    │   └── UI/                  # GameCard, ScrollToTop
    └── assets/
        ├── images/              # Game and site logos
        └── styles/              # One stylesheet per component and page
```

## Author

Designed and built by [Kyle Tranfaglia](https://github.com/ktranfaglia1).

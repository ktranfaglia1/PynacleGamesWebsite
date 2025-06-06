import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Games from './pages/Games';
import Downloads from './pages/Downloads';
import About from './pages/About';
import Contact from './pages/Connect';
import Learn from './pages/Learn';
import ScrollToTop from './components/UI/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/about" element={<About />} />
            <Route path="/connect" element={<Contact />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import { SearchProvider } from './Context/SearchContext';
// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <SearchProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </SearchProvider>
    <HeroImage />
    <GlobalStyle />
  </Router>
);

export default App;

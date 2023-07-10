import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Media from './components/Media';
import NotFound from './components/NotFound';
import { SearchProvider } from './Context/SearchContext';
import { MediaProvider } from './Context/MediaContext';
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <MediaProvider>
      <SearchProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaId" element={<Media />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </SearchProvider>
    </MediaProvider>
    <div style={{ textAlign: 'center', margin: '40px' }}>
      &copy; {new Date().getFullYear()} React Movie. All rights reserved.
    </div>
    <GlobalStyle />
  </Router>
);

export default App;

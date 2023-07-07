import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import Home from './components/Home';
import Media from './components/Media';
import NotFound from './components/NotFound';
import { SearchProvider } from './Context/SearchContext';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  const storedSelectedOption = localStorage.getItem('selectedOption');
  const [selectedOption, setSelectedOption] = useState(storedSelectedOption || 'all');
  const [mediaType, setMediaType] = useState(selectedOption);
  
  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
    localStorage.setItem('selectedOption', optionValue);
    console.log('clicked!' + optionValue);
  };

  const handleThumbClick = (mediaType) => {
    setMediaType(mediaType);
    console.log('clicked!' + mediaType);
  };
  
  useEffect(() => {
    setMediaType(selectedOption);
  }, [selectedOption]);

  return (
    <Router>
      <SearchProvider>
        <Navbar
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
        <Routes>
          <Route path="/" element={<Home selectedOption={mediaType} onThumbClick={handleThumbClick} />} />
          <Route path="/:mediaId" element={<Media selectedOption={mediaType} onThumbClick={handleThumbClick}/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </SearchProvider>
      <HeroImage />
      <GlobalStyle />
    </Router>
  );
};

export default App;

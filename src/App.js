import React, { useState } from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Components
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import Home from './components/Home';
import Media from './components/Media';
import NotFound from './components/NotFound';
import { SearchProvider } from './Context/SearchContext';
// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('movie');

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
    console.log('clicked!' + selectedOption);
  };

  return (
    <Router>
      <SearchProvider>
        <Navbar
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
        <Routes>
          <Route
            path="/"
            element={<Home selectedOption={selectedOption} />}
          />
          <Route
            path="/:mediaId"
            element={<Media selectedOption={selectedOption} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </SearchProvider>
      <HeroImage />
      <GlobalStyle />
    </Router>
  )
};

export default App;

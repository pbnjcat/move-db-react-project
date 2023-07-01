import React, { createContext, useState} from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    console.log('new search term: ' + newSearchTerm);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm: handleSearchTermChange }}>
      {children}
    </SearchContext.Provider>
  );
};

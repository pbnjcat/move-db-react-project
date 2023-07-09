import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm: handleSearchTermChange,
        inputValue,
        setInputValue
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

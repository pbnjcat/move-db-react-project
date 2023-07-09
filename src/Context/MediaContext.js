import React, { createContext, useState, useEffect } from 'react';

export const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
  const [mediaType, setMediaType] = useState(() => {
    const storedMediaType = localStorage.getItem('mediaType');
    return 'all' || storedMediaType;
  });

  const handleMediaTypeChange = (newMediaType) => {
    setMediaType(newMediaType);
  };

  useEffect(() => {
    localStorage.setItem('mediaType', mediaType);
  }, [mediaType]);

  return (
    <MediaContext.Provider value={{ mediaType, setMediaType: handleMediaTypeChange }}>
      {children}
    </MediaContext.Provider>
  );
};

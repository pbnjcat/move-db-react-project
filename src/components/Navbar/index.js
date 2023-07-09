import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RMDBLogo from '../../images/react-movie-logo.svg';
import DropdownMenu from '../DropdownMenu';
import SearchBar from '../SearchBar';

import { SearchContext } from '../../Context/SearchContext';

import { MediaContext } from '../../Context/MediaContext';

import { Wrapper, Content, LogoImg } from './Navbar.styles';

const Navbar = () => {
  const { mediaType, setMediaType } = useContext(MediaContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  // Function to clear the search term
  const clearSearchTerm = () => {
    setSearchTerm('');
  };

  return (
    <Wrapper>
      <Content>
        <Link to="/" onClick={clearSearchTerm}>
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Link to="/" onClick={clearSearchTerm}>
          <DropdownMenu mediaType={mediaType} setMediaType={setMediaType} />
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Navbar;

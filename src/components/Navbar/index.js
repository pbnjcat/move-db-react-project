import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RMDBLogo from '../../images/react-movie-logo.svg';
import DropdownMenu from '../DropdownMenu';
import SearchBar from '../SearchBar';

import { SearchContext } from '../../Context/SearchContext';

import { Wrapper, Content, LogoImg } from './Navbar.styles';

const Navbar = ({ handleOptionClick, selectedOption }) => {

  const { setSearchTerm } = useContext(SearchContext);
  // Function to clear the search term
  const clearSearchTerm = () => {
    setSearchTerm('');
  };

  return (
    <Wrapper>
      <Content>
        <Link to='/' onClick={clearSearchTerm} >
          <LogoImg src={RMDBLogo} alt='rmdb-logo' />
        </Link>
        <SearchBar />
        <DropdownMenu
          handleOptionClick={handleOptionClick}
          selectedOption={selectedOption}
        />
      </Content>
    </Wrapper>
  )
};

export default Navbar;

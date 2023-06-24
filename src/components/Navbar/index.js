import React from 'react';
import { Link } from 'react-router-dom';
import RMDBLogo from '../../images/react-movie-logo.svg';
import DropdownMenu from '../DropdownMenu';
import SearchBar from '../SearchBar';

import { Wrapper, Content, LogoImg } from './Navbar.styles';

const Navbar = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={RMDBLogo} alt='rmdb-logo' />
      </Link>
      <SearchBar />
      <DropdownMenu />
    </Content>
  </Wrapper>
);

export default Navbar;

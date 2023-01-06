import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
// import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg } from './Navbar.styles';


const Navbar = () => {

  //dropdown menu
  const [open, setOpen] = useState(false);

  const DropdownItem = (props) => {
    return (
      <li className='dropdown-item'>
        <div> {props.text} </div>
      </li>
    );
  }
  return (
    <Wrapper>
      <Content>
        <nav>
          <Link to='/'>
            <LogoImg src={RMDBLogo} alt='rmdb-logo' />
          </Link>
          <div className='menu-container'>
            <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
              <h3>Genre <span className={`hat-symbol ${open ? 'active' : 'inactive'}`}>{'\u25BC'}</span></h3>
              <h3>Genre <span className={`hat-symbol ${open ? 'active' : 'inactive'}`}>{'\u25BC'}</span></h3>
              <h3>Genre <span className={`hat-symbol ${open ? 'active' : 'inactive'}`}>{'\u25BC'}</span></h3>
            </div>
          </div>
          <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
            <ul>
              <h3>Sort By</h3>
              <DropdownItem text={'Genre'} />
              <DropdownItem text={'Item 1'} />
              <DropdownItem text={'Item 1'} />
              <DropdownItem text={'Item 1'} />
            </ul>
          </div>
        </nav>
      </Content>
    </Wrapper>
  )
}

export default Navbar;

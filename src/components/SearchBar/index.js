import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

//image
import searchIcon from '../../images/search-icon.svg';
//styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  //search bar
  const [state, setState] = useState('');
  const initial = useRef(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [state, setSearchTerm]);

  useEffect(() => {
    if (searchTerm === '') {
      setState('');
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    const newValue = event.currentTarget.value;
    setState(newValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchTerm(state);
      navigate('/'); // Navigate to the home page
    }
  };

  return (
    <Wrapper>
      <Content>
        <img className='search-ico' src={searchIcon} alt='search-icon' />
        <input
          type='text'
          placeholder='Search'
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;

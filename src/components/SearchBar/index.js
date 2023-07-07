import React, { useState, useEffect, useRef, useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';

//image
import searchIcon from '../../images/search-icon.svg';
//styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  //search bar
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [state]);

  useEffect(() => {
    if (searchTerm === '') {
      setState('');
    }
  }, [searchTerm]);

  return (
    <Wrapper>
      <Content>
        <img className='search-ico' src={searchIcon} alt='search-icon' />
        <input
          type='text'
          placeholder='Search'
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;

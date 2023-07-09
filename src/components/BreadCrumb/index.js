import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SearchContext } from '../../Context/SearchContext';
//Styles
import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = ({ mediaTitle }) => {
  const { setSearchTerm } = useContext(SearchContext);

  // Function to clear the search term
  const clearSearchTerm = () => {
    setSearchTerm('');
  };

  return (
    <Wrapper>
      <Content>
        <Link to="/" onClick={clearSearchTerm} >
          <span> Home </span>
        </Link>
        <span>|</span>
        <span>{mediaTitle}</span>
      </Content>
    </Wrapper>
  );
};

BreadCrumb.propTypes = {
  mediaTitle: PropTypes.string,
};

export default BreadCrumb;

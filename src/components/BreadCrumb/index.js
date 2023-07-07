import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SearchContext } from '../../Context/SearchContext';
//Styles
import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = ({ mediaTitle, onClick }) => {
  const { setSearchTerm } = useContext(SearchContext);

  // Function to clear the search term
  const clearSearchTerm = () => {
    setSearchTerm('');
  };

  return (
    <Wrapper>
      <Content>
        <Link to="/" onClick={clearSearchTerm} onClickHome={onClick}>
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

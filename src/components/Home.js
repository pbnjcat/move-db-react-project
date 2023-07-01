// Home.js

import React from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import { useHomeFetch } from '../hooks/useHomeFetch';
import NoImage from '../images/no_image.jpg';

const Home = ({ selectedOption }) => {
  const {
    state,
    loading,
    error,
    searchTerm,
    lastMediaElementRef,
  } = useHomeFetch(selectedOption);

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={selectedOption === 'show' ? state.results[0].original_name : state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map((media) => (
          <Thumb
            key={media.id}
            clickable
            image={
              media.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + media.poster_path
                : NoImage
            }
            mediaId={media.id}
            title={selectedOption === 'show' ? media.original_name : media.original_title}
          />
        ))}
      </Grid>

      <div ref={lastMediaElementRef}></div>

      {loading && <Spinner />}
    </>
  );
};

export default Home;

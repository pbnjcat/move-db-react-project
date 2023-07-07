import React from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import { useHomeFetch } from '../hooks/useHomeFetch';
import NoImage from '../images/no_image.jpg';

const Home = ({ selectedOption, onThumbClick  }) => {
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
      {!searchTerm && state.results.length > 0 && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={
            selectedOption === 'tv'
              ? state.results[0].original_name
              : state.results[0].original_title
          }
          text={state.results[0].overview}
        />
      )}
      <Grid
        header={
          searchTerm
            ? 'Search Result'
            : selectedOption === 'movie'
              ? 'Popular Movies'
              : selectedOption === 'tv'
                ? 'Popular Shows'
                : 'Trending Shows and Movies'
        }
      >
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
            title={selectedOption === 'tv' ? media.original_name : media.original_title}
            mediaType={media.media_type}
            onClick={selectedOption === 'all' ? () => onThumbClick(media.media_type) : null}
          />
        ))}
      </Grid>

      {!loading && state.page < state.total_pages && (
        <div ref={lastMediaElementRef}></div>
      )}

      {loading && <Spinner />}

      <div style={{ textAlign: 'center', margin: '40px' }}>
        &copy; {new Date().getFullYear()} React Movie. All rights reserved.
      </div>
    </>
  );
};


export default Home;

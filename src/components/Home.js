import React, { useContext } from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import { useHomeFetch } from '../hooks/useHomeFetch';
import NoImage from '../images/no_image.jpg';
import { SearchContext } from '../Context/SearchContext';

const Home = () => {
  const {
    state,
    loading,
    error,
    lastMovieElementRef,
  } = useHomeFetch();

  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>

      {state.results.map((movie, index) => {
        if (index === state.results.length - 1) {
          return <div ref={lastMovieElementRef} key={movie.id}></div>
        } else {
          return <div key={movie.id}></div>
        }
      })}

      {loading && <Spinner />}
    </>
  );
};

export default Home;

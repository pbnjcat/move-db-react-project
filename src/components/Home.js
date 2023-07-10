import React, { useContext } from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import { useHomeFetch } from '../hooks/useHomeFetch';

import { MediaContext } from '../Context/MediaContext';

import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { mediaType, setMediaType } = useContext(MediaContext);
  const {
    state,
    loading,
    error,
    searchTerm,
    lastMediaElementRef,
  } = useHomeFetch();

  if (error) {
    return <div>Something went wrong...</div>;
  }

  const handleHeroClick = (mediaType) => {
    if (mediaType) {
      setMediaType(mediaType);
    }
  };

  return (
    <>
      {!searchTerm && state.results.length > 0 && (
        <HeroImage
          mediaId={state.results[0].id}
          onClick={() => handleHeroClick(state.results[0].media_type)}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={
            mediaType === 'tv'
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
            : mediaType === 'movie'
              ? 'Popular Movies'
              : mediaType === 'tv'
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
            title={mediaType === 'tv' ? media.original_name : media.original_title}
            mediaType={media.media_type}
            onClick={mediaType === 'all' ? () => setMediaType(media.media_type) : null}
          />
        ))}
      </Grid>

      {!loading && state.page < state.total_pages && !searchTerm && (
        <div ref={lastMediaElementRef}></div>
      )}

      {loading && <Spinner />}
    </>
  );
};


export default Home;

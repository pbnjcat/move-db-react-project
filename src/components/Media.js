import React from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MediaInfo from './MediaInfo'
import MediaInfoBar from './MediaInfoBar';
import Actor from './Actor';
// Hooks
import { useMediaFetch } from '../hooks/useMediaFetch';
// Image
import NoImage from '../images/no_image.jpg';

const Media = ({ selectedOption, onThumbClick }) => {
  const { mediaId } = useParams();
  const { state: media, loading, error } = useMediaFetch(mediaId, selectedOption);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  // Transform the data based on media type
  const transformedMedia = {
    id: media.id,
    title: selectedOption === 'tv' ? media.original_name : media.original_title,
    overview: media.overview,
    vote_average: media.vote_average,
    directors: selectedOption === 'tv' ? media.created_by : media.directors,
    genres: media.genres,
    poster_path: media.poster_path,
    backdrop_path: media.backdrop_path,
    actors: media.actors,
    runtime: selectedOption === 'tv' ? media.episode_run_time : media.runtime,
    budget: media.budget,
    revenue: media.revenue,
  };

  return (
    <>
      <BreadCrumb 
        mediaTitle={transformedMedia.title} 
        onClick={selectedOption === 'all' ? () => onThumbClick(media.media_type) : null} 
      />
      <MediaInfo media={transformedMedia} selectedOption={selectedOption} />
      <MediaInfoBar
        time={transformedMedia.runtime}
        budget={transformedMedia.budget}
        revenue={transformedMedia.revenue}
      />
      <Grid header='Actors'>
        {transformedMedia.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Media;

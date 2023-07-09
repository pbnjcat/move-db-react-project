import React, { useContext } from 'react';
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


import { MediaContext } from '../Context/MediaContext';
// Image
import NoImage from '../images/no_image.jpg';

const Media = () => {
  const { mediaId } = useParams();
  const { mediaType, setMediaType } = useContext(MediaContext);
  const { state: media, loading, error } = useMediaFetch(mediaId, mediaType);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  // Transform the data based on media type
  const transformedMedia = {
    id: media.id,
    title: mediaType === 'tv' ? media.original_name : media.original_title,
    overview: media.overview,
    vote_average: media.vote_average,
    directors: mediaType === 'tv' ? media.created_by : media.directors,
    genres: media.genres,
    poster_path: media.poster_path,
    backdrop_path: media.backdrop_path,
    actors: media.actors,
    runtime: mediaType === 'tv' ? media.episode_run_time : media.runtime,
    budget: media.budget,
    revenue: media.revenue,
  };

  return (
    <>
      <BreadCrumb
        mediaTitle={transformedMedia.title}
        onClick={mediaType === 'all' ? () => setMediaType(media.media_type) : null}
      />
      <MediaInfo media={transformedMedia} mediaType={mediaType} />
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

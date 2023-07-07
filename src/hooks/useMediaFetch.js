import { useState, useEffect } from 'react';
import API from '../API';

export const useMediaFetch = (mediaId, mediaType) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMedia = async () => {

      try {
        setLoading(true);
        setError(false);

        let media, credits;
        if(mediaType === 'all') {
          
        }
        if (mediaType === 'movie') {
          media = await API.fetchMovie(mediaId);
          credits = await API.fetchMovieCredits(mediaId);

        }
        else if (mediaType === 'tv') {
          media = await API.fetchShow(mediaId);
          credits = await API.fetchShowCredits(mediaId);
        }

        const directors = credits.crew.filter(
          (member) => member.job === 'Director'
        );

        setState({
          ...media,
          actors: credits.cast,
          directors,
        });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchMedia();
  }, [mediaId, mediaType]);

  // // write to sessionStorage
  // useEffect(() => {
  //   sessionStorage.setItem(movieId, JSON.stringify(state));
  // }, [movieId, state]);

  return { state, loading, error };
};

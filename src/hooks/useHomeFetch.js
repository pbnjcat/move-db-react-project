import { useState, useEffect, useRef, useCallback, useContext } from 'react';
import API from '../API';
import { SearchContext } from '../Context/SearchContext';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = (mediaType) => {
  const { searchTerm } = useContext(SearchContext);
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMedia = useCallback(async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      let media;
      
      if (mediaType === 'all') {
        media = await API.fetchTrendingAllDaily(searchTerm, page);
        console.log(media);
      }
      else if (mediaType === 'movie') {
        media = await API.fetchMovies(searchTerm, page);
      } 
      else if (mediaType === 'tv') {
        media = await API.fetchSeries(searchTerm, page);
      }

      setState((prev) => ({
        ...media,
        results:
          page > 1 ? [...prev.results, ...media.results] : [...media.results],
      }));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }, [mediaType]);

  // initial media load and searching
  useEffect(() => {
    setState(initialState);
    fetchMedia(1, searchTerm);
  }, [searchTerm, mediaType, fetchMedia]);

  const observer = useRef();
  const lastMediaElementRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIsLoadingMore(true);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, setIsLoadingMore]
  );

  useEffect(() => {
    if (!isLoadingMore || mediaType === 'all') {
      return;
    }

    fetchMedia(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  return {
    state,
    loading,
    error,
    searchTerm,
    setIsLoadingMore,
    lastMediaElementRef,
    mediaType,
  };
};

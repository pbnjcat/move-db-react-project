import {
  SEARCH_MOVIE_URL,
  POPULAR_MOVIE_URL,
  POPULAR_SERIES_URL,
  SEARCH_SERIES_URL,
  TRENDING_ALL_URL,
  MULTI_SEARCH_URL,
  API_URL,
  API_KEY,
} from './config';

const apiSettings = {
  //Trending movies and shows and all search
  fetchTrendingAllDaily: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${MULTI_SEARCH_URL}${searchTerm}&page=${page}`
      : `${TRENDING_ALL_URL}${API_KEY}&language=en-US`;
    return await (await fetch(endpoint)).json();
  },

  // movie endpoints
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_MOVIE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_MOVIE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (mediaId) => {
    const endpoint = `${API_URL}movie/${mediaId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovieCredits: async (mediaId) => {
    const creditsEndpoint = `${API_URL}movie/${mediaId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },

  // shows endpoints
  fetchSeries: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_SERIES_URL}${searchTerm}&page=${page}&include_adult=false`
      : `${POPULAR_SERIES_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchShow: async (mediaId) => {
    const endpoint = `${API_URL}tv/${mediaId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchShowCredits: async (mediaId) => {
    const creditsEndpoint = `${API_URL}tv/${mediaId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
};

export default apiSettings;

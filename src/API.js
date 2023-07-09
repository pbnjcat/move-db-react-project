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
  // Helper function to handle API requests
  fetchData: async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Error occurred while fetching data');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while fetching data');
    }
  },

  // Trending movies and shows and all search
  fetchTrendingAllDaily: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${MULTI_SEARCH_URL}${searchTerm}&page=${page}`
      : `${TRENDING_ALL_URL}${API_KEY}&language=en-US`;
    return await apiSettings.fetchData(endpoint);
  },

  // movie endpoints
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_MOVIE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_MOVIE_URL}&page=${page}`;
    return await apiSettings.fetchData(endpoint);
  },
  fetchMovie: async (mediaId) => {
    const endpoint = `${API_URL}movie/${mediaId}?api_key=${API_KEY}`;
    return await apiSettings.fetchData(endpoint);
  },
  fetchMovieCredits: async (mediaId) => {
    const creditsEndpoint = `${API_URL}movie/${mediaId}/credits?api_key=${API_KEY}`;
    return await apiSettings.fetchData(creditsEndpoint);
  },

  // shows endpoints
  fetchSeries: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_SERIES_URL}${searchTerm}&page=${page}&include_adult=false`
      : `${POPULAR_SERIES_URL}&page=${page}`;
    return await apiSettings.fetchData(endpoint);
  },
  fetchShow: async (mediaId) => {
    const endpoint = `${API_URL}tv/${mediaId}?api_key=${API_KEY}`;
    return await apiSettings.fetchData(endpoint);
  },
  fetchShowCredits: async (mediaId) => {
    const creditsEndpoint = `${API_URL}tv/${mediaId}/credits?api_key=${API_KEY}`;
    return await apiSettings.fetchData(creditsEndpoint);
  },
};

export default apiSettings;

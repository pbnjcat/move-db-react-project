// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = `https://api.themoviedb.org/3/`;
const API_KEY = process.env.REACT_APP_API_KEY;

const SEARCH_MOVIE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_MOVIE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

const TRENDING_ALL_URL = `${API_URL}trending/all/day?api_key=${API_KEY}&language=en-US&query=`;
const MULTI_SEARCH_URL = `${API_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=`;

const SEARCH_SERIES_URL = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_SERIES_URL =`${API_URL}tv/popular?api_key=${API_KEY}&language=en-US`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  SEARCH_MOVIE_URL,
  SEARCH_SERIES_URL,
  POPULAR_SERIES_URL,
  POPULAR_MOVIE_URL,
  TRENDING_ALL_URL,
  MULTI_SEARCH_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,

};

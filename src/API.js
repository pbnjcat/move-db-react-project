import {
  SEARCH_MOVIE_URL,
  POPULAR_MOVIE_URL,
  POPULAR_SERIES_URL,
  SEARCH_SERIES_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const apiSettings = {
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


  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json();
      return sessionId;
    }
  },
  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value }),
      })
    ).json();

    return rating;
  },
};

export default apiSettings;

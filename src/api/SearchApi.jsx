import axios from 'axios';

const KEY = 'aec86298015b623e3598e86276b5a670';
const URL = 'https://api.themoviedb.org/3';
const BasicURL = 'https://image.tmdb.org/t/p/original';

const positiveResult = response => {
  if (response.status === 200) {
    const data = response.data.total_results !== 0 ? response.data : '';
    return { data, BasicURL };
  }
};

export const TrendingMovies = async () => {
  return axios
    .get(`${URL}/trending/movie/day?api_key=${KEY}`)
    .then(response => positiveResult(response));
};

export const GetMovieDetails = async id => {
  return axios
    .get(`${URL}/movie/${id}?api_key=${KEY}&language=en-US`)
    .then(response => positiveResult(response));
};

export const GetCredits = async id => {
  return axios
    .get(`${URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`)
    .then(response => positiveResult(response));
};

export const GetReviews = async id => {
  return axios
    .get(`${URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
    .then(response => positiveResult(response));
};

export const GetSearchMoviews = async query => {
  return axios
    .get(
      `${URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    )
    .then(response => positiveResult(response));
};

export const GET_MOVIES = 'GET_MOVIES';
export const SUCCESS_MOVIES = 'SUCCESS_MOVIES';

export const getMovies = payload => ({
  type: GET_MOVIES,
  ...payload,
});

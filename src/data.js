import { MOVIES_POPULAR } from './shared/constants';
// import { Movie } from './entites/Movie';

function getMovies(onSuccess) {
  fetch(MOVIES_POPULAR)
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      const moviesPopular = json.results.slice(0, 4);
      onSuccess(moviesPopular);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export {
  getMovies
};
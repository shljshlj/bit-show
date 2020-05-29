// examples
// 


const BASE_ENDPOINT = 'https://api.themoviedb.org/3';
const TOP_RATED_MOVIES = 'https://api.themoviedb.org/3/movie/top_rated?api_key=35fa02b1677d860218f4c89a577a0cae&language=en-US&page=1';

const api_key = process.env.TMDB_API_KEY;

// const movieURL = `${BASE_ENDPOINT}/${movieId}&api_key=${api_key}`;

function getShows(onSuccess) {
  fetch(TOP_RATED_MOVIES)
    .then(function (response) {
      return response.json()
    })
    .then(function (shows) {
      console.log(shows);
      // const topRatedShows = sortShows(shows).slice(0, 50);
      // const ourShows = topRatedShows.map(show => {
      //   const { name, image, id, summary } = show;

      //   return new Show(name, image, id, summary);
      // })
      // onSuccess(ourShows);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export {
  getShows
};
// examples
// 


const BASE_ENDPOINT = 'https://api.themoviedb.org/3';

const api_key = process.env.TMDB_API_KEY;

const movieURL = `${BASE_ENDPOINT}/${movieId}&api_key=${api_key}`;

function getShows(onSuccess) {
  fetch(SHOW_API)
    .then(function (response) {
      return response.json()
    })
    .then(function (shows) {
      const topRatedShows = sortShows(shows).slice(0, 50);
      const ourShows = topRatedShows.map(show => {
        const { name, image, id, summary } = show;

        return new Show(name, image, id, summary);
      })
      onSuccess(ourShows);
    })
    .catch(function (error) {
      console.log(error);
    });
}


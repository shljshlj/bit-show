import { imageConfiguration } from './configuration';

// Api key
export const API_KEY = process.env.TMDB_API_KEY;

// Endpoints
export const BASE_API_ENDPOINT = 'https://api.themoviedb.org/3';
const MOVIE_ENDPOINT = BASE_API_ENDPOINT + '/movie';
const TV_ENDPOINT = BASE_API_ENDPOINT + '/tv';

export const MOVIES_TOP_RATED = `${MOVIE_ENDPOINT}/top_rated?api_key=${API_KEY}`;
export const MOVIES_POPULAR = `${MOVIE_ENDPOINT}/popular?api_key=${API_KEY}`;
export const TV_TOP_RATED = `${TV_ENDPOINT}/popular?api_key=${API_KEY}`;
export const TV_POPULAR = `${TV_ENDPOINT}/top_rated?api_key=${API_KEY}`;


// https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1
// https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=1




// Poster images
export const POSTER_PATH_L = imageConfiguration.images.secure_base_url + imageConfiguration.images.poster_sizes[5];
export const POSTER_PATH_M = imageConfiguration.images.secure_base_url + imageConfiguration.images.poster_sizes[4];

// Backdrop images
export const POSTER_BACKDROP = imageConfiguration.images.secure_base_url + imageConfiguration.images.backdrop_sizes[3];

// IMDb Url
export const IMDB_URL = 'https://www.imdb.com/title/';
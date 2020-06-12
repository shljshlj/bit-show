import axios from 'axios';
import { BASE_API_ENDPOINT } from './constants';

const API_KEY = process.env.TMDB_API_KEY;

// export const API = {
//   baseUrl: BASE_API_ENDPOINT,
//   async get(path) {
//     const requestUrl = this.baseUrl + path;
//     console.log(requestUrl)

//     const options = {
//       method: 'GET',
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       }),
//       api_key: API_KEY
//     };

//     const response = await fetch(requestUrl, options);
//     return await response.json();
//   }
// };

export default axios.create({
  baseURL: BASE_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json'
  }
});
const base_url = "https://api.themoviedb.org/3/movie";
const api_key = "feb6f0eeaa0a72662967d77079850353";
const image_url = "https://image.tmdb.org/t/p/w300";

export const getImage = (path) => `${image_url}/${path}`;

export const GetUpcomingMovies = () =>`${base_url}/upcoming?api_key=${api_key}&language=en-US&page=1`;

export const GetPopularMovies = () =>`${base_url}/popular?api_key=${api_key}&language=en-US&page=1`;

export const GetTopRatedMovies = () =>`${base_url}/top_rated?api_key=${api_key}&language=en-US&page=1`;
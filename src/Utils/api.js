import axios from 'axios';
import img from '../components/Movies/no-photo.png';

const base_url = "https://api.themoviedb.org/3/movie";
const api_key = "feb6f0eeaa0a72662967d77079850353";
const image_url = "https://image.tmdb.org/t/p/w300";


export const getImage = (path) => {

    const no_img_path = img;

    if(!path)
        return no_img_path;

    return `${image_url}/${path}`; 
}


export const getMovies = (genre, page=1) => {
    
    genre = genre.toLowerCase();

    if(genre === 'toprated')
        genre = 'top_rated';
    
    const url = `${base_url}/${genre}?api_key=${api_key}&language=en-US&page=${page}`;

    const data = axios.get(url)
                    .then(response => {
                        return response.data.results;
                    })
                    .catch(err => {
                        console.log(err);
                    })
    return data;
};
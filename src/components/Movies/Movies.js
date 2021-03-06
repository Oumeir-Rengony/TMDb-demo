import React from 'react';
import styles from './Movies.module.css';
import { getImage } from '../../Utils/api';
import Overlay from './Overlay/Overlay';
import { useParams } from "react-router-dom";
import Spinner from './Spinner/Spinner';

const Movies = ({ movies}) => {

    let { page } = useParams()
   
    //check if movie exist in object
    const index =  movies.findIndex(movie => movie.page === parseInt(page));

    const movieLayout = () => {

        if(index === -1){
            return <Spinner/>;
        }

        else{
            return (
                movies[index].data.map( movie => (
                    <div key={movie.id} className={styles.container}>
                        <img src={getImage(movie.poster_path) } className={styles.poster} alt="poster"/>
                        {!movie.poster_path ? <span className={styles.no_image}>No Image Availaible</span> : null}
                        <Overlay movie={movie} />
                    </div>
                ))
            );
        }

    };

    return(
        <>

            {
                movieLayout()
                
            }
        
        </>
    );

};

export default Movies;
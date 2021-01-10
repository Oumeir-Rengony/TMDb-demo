import React from 'react';
import styles from './Movies.module.css';
import { getImage } from '../../Utils/api';
import Overlay from './Overlay/Overlay';

const Movies = ({ movies }) => {

    return(
        <>
            {
                
                movies.map( movie => (
                        <div key={movie.id} className={styles.container}>
                            <img src={getImage(movie.poster_path) } className={styles.poster} alt="poster"/>
                            <Overlay movie={movie} />
                        </div>
                ))
            }
        
        </>
    );

};

export default Movies;
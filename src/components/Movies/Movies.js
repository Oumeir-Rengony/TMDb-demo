import React from 'react';
import styles from './Movies.module.css';
import { getImage } from '../../Utils/api';
import infoIcon from './info.svg';

const Movies = ({ movies }) => {

    return(
        <>
            {
                
                movies.map( movie => (
                        <div key={movie.id} className={styles.container}>
                            <img src={getImage(movie.poster_path) } className={styles.poster} alt="poster"/>
                            <img  src={infoIcon} className={styles.info} alt="information"/>
                            <div  className={styles.overlay}>
                                <h2>{movie.title}</h2>
                                <br/>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                ))
            }
        
        </>
    );

};

export default Movies;
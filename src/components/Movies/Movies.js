import React from 'react';
import styles from './Movies.module.css';
import { getImage } from '../../Utils/api';
import Overlay from './Overlay/Overlay';
import { useParams } from "react-router-dom";

const Movies = ({ movies}) => {

    let params = useParams();
    let page = params.page;
    
    if( page === undefined)
        page = 1;

    const index =  movies.findIndex(movie => movie.page === parseInt(page));

    return(
        <>

            {

                movies[index].data.map( movie => (
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
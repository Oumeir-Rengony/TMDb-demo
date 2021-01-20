import React from 'react';
import styles from './Navbar.module.css';
import Categories from './Categories/Categories';
import movieIcon from './clapperboard.svg';

const Navbar = ({currentMovie, handleMovieCategorie}) => {

    return(
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={movieIcon} alt="icon"/>
                <span>MOVIES</span>
            </div>
            
            <Categories currentMovie={currentMovie} handleMovieCategorie={handleMovieCategorie}/>
        </div>
    );

};

export default Navbar;
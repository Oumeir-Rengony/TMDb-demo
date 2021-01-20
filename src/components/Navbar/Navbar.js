import React from 'react';
import styles from './Navbar.module.css';
import Categories from './Categories/Categories';
import movieIcon from './clapperboard.svg';

const Navbar = ({currentMovie, setCurrentMovie, 
                    setUpcomingMovies,setTopRatedMovies, topRatedMovies, upcomingMovies}) => {

    return(
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={movieIcon} alt="icon"/>
                <span>MOVIES</span>
            </div>
            
            <Categories 
                currentMovie={currentMovie} 
                setCurrentMovie={setCurrentMovie}
                setUpcomingMovies={setUpcomingMovies}
                setTopRatedMovies={setTopRatedMovies}
                topRatedMovies={topRatedMovies}
                upcomingMovies={upcomingMovies}
                />
        </div>
    );

};

export default Navbar;
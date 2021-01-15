import React from 'react';
import styles from './Navbar.module.css';
import Categories from './Categories/Categories';
import movieIcon from './clapperboard.svg';

const Navbar = ({currentMovie, setCurrentMovie, setPage, 
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
                setPage={setPage}
                setUpcomingMovies={setUpcomingMovies}
                setTopRatedMovies={setTopRatedMovies}
                topRatedMovies={topRatedMovies}
                upcomingMovies={upcomingMovies}
                />
        </div>
    );

};

export default Navbar;
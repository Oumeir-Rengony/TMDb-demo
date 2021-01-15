import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';
import { getMovies } from '../../../Utils/api';

const Categories = ({currentMovie, setCurrentMovie, setPage,
                        setUpcomingMovies, setTopRatedMovies, topRatedMovies, upcomingMovies}) => {

    const [isDropdownVisible, setDropdownVisibility] = useState(false);

    const handleWrapperDropdownClick = () => setDropdownVisibility(currentVisibility => !currentVisibility);

    const dropdownStyle = () => isDropdownVisible?styles.dropdown_active:null;

    const LoadMovieData = (currentCategory) => {

        const initialUpcomingData = upcomingMovies[0].data.length === 0;
        const initialTopRatedData = topRatedMovies[0].data.length===0;

        if( initialUpcomingData|| initialTopRatedData){

            currentCategory = currentCategory.toLowerCase();
    
            getMovies(currentCategory, 1).then(response => {
    
                if(currentCategory === 'upcoming' && initialUpcomingData){
                    setUpcomingMovies([{id:1, page:1, data:response}]);
                }
                else if(currentCategory === 'toprated' && initialTopRatedData){
                    setTopRatedMovies([{id:1, page:1, data:response}]);
                }
            }); 
        }

    };

    const handleMovieCategorie = (e) => {
        let currentCategory = e.target.innerText;
        setPage(1);
        setCurrentMovie(currentCategory);

        LoadMovieData(currentCategory);
        
    };

    return(

        <div className={styles.wrapper_dropdown} onClick={handleWrapperDropdownClick}>
            <span>{currentMovie}</span>
            <ul className={`${styles.dropdown} ${dropdownStyle()}`}>
                <li onClick={handleMovieCategorie}><Link to="/1">Popular</Link></li>
                <li onClick={handleMovieCategorie}><Link to="/upcoming/1">Upcoming</Link></li>
                <li onClick={handleMovieCategorie}><Link to="/toprated/1">TopRated</Link></li>
            </ul>
        </div>
    );

    

};

export default Categories;
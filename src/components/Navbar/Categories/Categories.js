import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const Categories = ({currentMovie, handleMovieCategorie}) => {

    const [isDropdownVisible, setDropdownVisibility] = useState(false);

    const handleWrapperDropdownClick = () => setDropdownVisibility(currentVisibility => !currentVisibility);

    const dropdownStyle = () => isDropdownVisible?styles.dropdown_active:null;

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
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css'

const Navbar = () => {

    const [CurrentMovie, setCurrentMovie] = useState('Popular');
    const [isDropdownVisible, setDropdownVisibility] = useState(false);

    const handleWrapperDropdownClick = () => setDropdownVisibility(currentVisibility => !currentVisibility);

    const handleMovieCategorie = (e) => {
        setCurrentMovie(e.target.innerText);
    };

    const dropdownStyle = () => isDropdownVisible?styles.dropdown_active:null;

    return(

        <div className={styles.wrapper_dropdown} onClick={handleWrapperDropdownClick}>
            <span>{CurrentMovie}</span>
            <ul className={`${styles.dropdown} ${dropdownStyle()}`}>
                <li onClick={handleMovieCategorie}><Link to="/">Popular</Link></li>
                <li onClick={handleMovieCategorie}><Link to="/upcoming">Upcoming</Link></li>
                <li onClick={handleMovieCategorie}><Link to="/toprated">TopRated</Link></li>
            </ul>
        </div>
    );

    

};

export default Navbar;
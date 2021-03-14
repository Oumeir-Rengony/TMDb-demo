import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const Categories = ({currentMovie}) => {

    const [isDropdownVisible, setDropdownVisibility] = useState(false);

    const handleWrapperDropdownClick = () => setDropdownVisibility(currentVisibility => !currentVisibility);

    const dropdownStyle = () => isDropdownVisible?styles.dropdown_active:null;

    const capitaliseFirstLetter = word => word.charAt(0).toUpperCase() + word.slice(1);


    return(

        <div className={styles.wrapper_dropdown} onClick={handleWrapperDropdownClick}>
            <span>{capitaliseFirstLetter(currentMovie)}</span>
            <ul className={`${styles.dropdown} ${dropdownStyle()}`}>
                <li><Link to="/popular/1">Popular</Link></li>
                <li><Link to="/upcoming/1">Upcoming</Link></li>
                <li><Link to="/toprated/1">TopRated</Link></li>
            </ul>
        </div>
    );

    
};

export default Categories;
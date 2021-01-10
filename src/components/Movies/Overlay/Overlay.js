import React from 'react';
import { useState } from 'react';
import styles from './Overlay.module.css';
import infoIcon from './info.svg';

const Overlay = ({ movie }) => {

    const [isOverlayVisible, setOverlayVisibility] = useState(false);

    const handleClick = () => setOverlayVisibility((currentVisibility) => !currentVisibility);

    const overlayStyle = () =>  isOverlayVisible?styles.overlay_active:null;


    return(
        <>
            <img  src={infoIcon} className={styles.info} onClick={handleClick} alt="information"/>
            <div  className={`${styles.overlay} ${overlayStyle()}`}>
                <h2>{movie.title}</h2>
                <br/>
                <p>{movie.overview}</p>
            </div>
        </>
    );

};

export default Overlay;
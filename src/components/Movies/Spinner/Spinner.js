import React from 'react';
import style from './Spinner.module.css';

const Spinner = () => (

    <div className={style.spinner_container}>
        <div className={style.loader}></div>
    </div>
    
);

export default Spinner;
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pagination.module.css';
import {getMovies} from '../../../Utils/api';

const Pagination = ({setPage, currentMovie, setPopularMovies, setUpcomingMovies, setTopRatedMovies}) => {

    const setMovieData = (prev, response, page) => {
        let exist = false;
        prev.forEach((value) => {
            if (value.page === page)
                exist = true;
        });
        return exist === false ? [...prev, { id:page, page:page, data:response }] : prev;
    };

    const handleClick = (e) => {
        const page = parseInt(e.target.innerText);

        getMovies(currentMovie, page).then(response => {   
            if(currentMovie === 'Popular')
                setPopularMovies(prev => setMovieData(prev, response, page));
            else if(currentMovie === 'Upcoming')
                setUpcomingMovies(prev => setMovieData(prev, response, page));
            else
                setTopRatedMovies(prev => setMovieData(prev, response, page));

            setPage(page);
        });
        
    };

    const setPagesLink = (page) => {

        if(currentMovie === 'Popular'){
            return `/${page}`;
        }
        else{
            return `/${currentMovie.toLowerCase()}/${page}`;
        }
    };

    const pageNumbers = () => {
        const array = [];

        for(let i=1; i<=10; i++){
            array.push(<Link key={i} className={styles.page_numbers} to={setPagesLink(i.toString())} onClick={handleClick}>{i}</Link>);
        }

        return array;
    };

    return (
        <div className={styles.pagination_wrapper}>
            <div className={styles.pagination}>
                <a className={`${styles.prev} ${styles.page_numbers}`} href="/">prev</a>

                {pageNumbers()}

                <a className={`${styles.next} ${styles.page_numbers}`} href="/">next</a>
            </div>
        </div>

    );

};

export default Pagination;
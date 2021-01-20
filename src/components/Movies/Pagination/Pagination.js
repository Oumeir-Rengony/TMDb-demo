import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Pagination.module.css';
import {getMovies} from '../../../Utils/api';

const Pagination = ({history, currentMovie, popularMovies, upcomingMovies, topRatedMovies,
                        setPopularMovies, setUpcomingMovies, setTopRatedMovies}) => {

    const handleClick = (e) => {

        e.preventDefault();
        
        const page = parseInt(e.target.innerText);

        if(currentMovie === 'Popular'){
            const MovieExist = popularMovies.filter( obj => obj.id===page);
            if(MovieExist.length === 0){
                getMovies(currentMovie, page).then(response => {
                    setPopularMovies(prev => [...prev, { id:page, page:page, data:response }]);
                    history.push(`/${page}`);
                });
            }
            else
                history.push(`/${page}`);
        }

        else if(currentMovie === 'Upcoming'){
            const MovieExist = upcomingMovies.filter( obj => obj.id===page);
            if(MovieExist.length === 0){
                getMovies(currentMovie, page).then(response => {
                    setUpcomingMovies(prev => [...prev, { id:page, page:page, data:response }]);
                    history.push(`/upcoming/${page}`);

                });
            }
            else
                history.push(`/upcoming/${page}`);
        }
        else{
            const MovieExist = topRatedMovies.filter( obj => obj.id===page);
            if(MovieExist.length === 0){
                getMovies(currentMovie, page).then(response => {
                    setTopRatedMovies(prev => [...prev, { id:page, page:page, data:response }]);
                    history.push(`/toprated/${page}`);
                });
            }
            else
                history.push(`/toprated/${page}`);
        }
        
    };

    const setPagesLink = (page) => {

        if(currentMovie === 'Popular'){
            return `/${page}`;
        }
        else{
            console.log(currentMovie.toLowerCase());
            return `/${currentMovie.toLowerCase()}/${page}`;
        }
    };

    const pageNumbers = () => {
        const array = [];

        for(let i=1; i<=10; i++){
            array.push(
                <Link key={i} 
                    className={styles.page_numbers} 
                    to={setPagesLink(i.toString())} 
                    // replace ={setPagesLink(i.toString()) === location.pathname} 
                    onClick={handleClick}>{i}
                </Link>
            );
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

export default withRouter(Pagination);
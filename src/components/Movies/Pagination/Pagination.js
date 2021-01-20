import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pagination.module.css';

const Pagination = ({handlePageClick, currentMovie}) => {

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
            array.push(
                <Link key={i} 
                    className={styles.page_numbers} 
                    to={setPagesLink(i.toString())}  
                    onClick={handlePageClick}>{i}
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

export default Pagination;
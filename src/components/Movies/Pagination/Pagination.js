import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Pagination.module.css';

const Pagination = ({handlePageClick, currentMovie}) => {

    let {pathname} = useLocation();
    pathname = pathname.split("/");
    let pageIndex = pathname.length - 1;

    let page = pathname[pageIndex];
    
    if(page === "")
        page=1;
    

    const setPagesLink = (page) => {

        if(currentMovie === 'Popular'){
            return `/${page}`;
        }
        else{
            return `/${currentMovie.toLowerCase()}/${page}`;
        }

    };

    const activePage = (ButtonIndex) => {
        return ButtonIndex === parseInt(page)?styles.current:null;
    }

    const pageNumbers = () => {
        const array = [];

        for(let i=1; i<=10; i++){
            array.push(
                <Link key={i} 
                    className={`${styles.page_numbers} ${activePage(i)}`} 
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
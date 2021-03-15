import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Pagination.module.css';

const Pagination = ({currentMovie}) => {

    let {pathname} = useLocation();
    pathname = pathname.split("/");
    let pageIndex = pathname.length - 1;

    let page = parseInt(pathname[pageIndex]);

    
    const handlePageLimits = (e) => {

        const button = e.target.innerText;

        if(page === 1 && button === 'prev')
            e.preventDefault();
        if(page === 10 && button === 'next')
            e.preventDefault();   
        
    };

    const activePage = (ButtonIndex) => ButtonIndex === page ? styles.current : null;

    const pageNumbers = () => {

        const array = [];  

        for(let i=1; i<=10; i++){

            //css to display a maximum of 4 siblings of active page number
            let dynamicDisplay = {};
            
            if(i <= page-3 || i >= page+3)
                dynamicDisplay = {display:'none'};

            array.push(
                <Link key={i} 
                    className={`${styles.page_numbers} ${activePage(i)}`}
                    style={dynamicDisplay}
                    to={`/${currentMovie}/${i}`}
                    >

                    {i}
                    
                </Link>
            );
        }

        return array;
    };

    

    return (
        <div className={styles.pagination_wrapper}>
            <div className={styles.pagination}>
                <Link 
                    className={`${styles.prev}`} 
                    to={`/${currentMovie}/${page - 1}`}
                    onClick={handlePageLimits}>
                        prev
                </Link>

                    {pageNumbers()}

                <Link 
                    className={`${styles.next}`} 
                    to={`/${currentMovie}/${page + 1}`}
                    onClick={handlePageLimits}
                >
                    next
                </Link>
            </div>
        </div>

    );

};

export default Pagination;
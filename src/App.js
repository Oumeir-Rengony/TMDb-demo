import { useEffect, useState, useCallback } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import styles from './App.module.css';
import Movies from './components/Movies/Movies';
import Navbar from './components/Navbar/Navbar';
import Pagination from './components/Movies/Pagination/Pagination';
import { getMovies } from './Utils/api';


function App() {

  const [popularMovies, setPopularMovies] = useState([{id:1, page:1, data:[]}]);
  const [upcomingMovies, setUpcomingMovies] = useState([{id:1, page:1, data:[]}]);
  const [topRatedMovies, setTopRatedMovies] = useState([{id:1, page:1, data:[]}]);

  const [currentMovie, setCurrentMovie] = useState('Popular');


  let history = useHistory();

  useEffect ( ()=> {

    const popularMoviesData = getMovies('popular', 1);
    popularMoviesData.then(response => {
      setPopularMovies([{id:1, page:1, data:response}]);
    });
    
  }, []);


  const loadInitialMovieData = (currentCategory) => {

    const initialUpcomingData = upcomingMovies[0].data.length === 0;
    const initialTopRatedData = topRatedMovies[0].data.length === 0;

    if( initialUpcomingData|| initialTopRatedData){

        currentCategory = currentCategory.toLowerCase();

        getMovies(currentCategory, 1).then(response => {

            if(currentCategory === 'upcoming' && initialUpcomingData){
                setUpcomingMovies([{id:1, page:1, data:response}]);
            }
            else if(currentCategory === 'toprated' && initialTopRatedData){
                setTopRatedMovies([{id:1, page:1, data:response}]);
            }
        }); 
    }

  };

  const handleMovieCategorie = useCallback((e) => {
      let currentCategory = e.target.innerText;
      setCurrentMovie(currentCategory);
      loadInitialMovieData(currentCategory);
  }, [currentMovie]);


  const loadMovieDataByPage = (page, movie, setMovie, path) => {
    const MovieExist = movie.filter( obj => obj.id===page);

    if(MovieExist.length === 0){
      getMovies(currentMovie, page).then(response => {
        setMovie(prev => [...prev, { id:page, page:page, data:response }]);
          history.push(path);
      });
    }
    else
      history.push(path);
  };

  const handlePageClick = (e) => {

    e.preventDefault();
    
    const page = parseInt(e.target.innerText);
    let path = '';

    if(currentMovie === 'Popular'){
      path = `/${page}`;
      loadMovieDataByPage(page, popularMovies, setPopularMovies, path);
    }

    else if(currentMovie === 'Upcoming'){
      path = `/upcoming/${page}`;
      loadMovieDataByPage(page, upcomingMovies, setUpcomingMovies,path);
    }
    else{
      path = `/toprated/${page}`;
      loadMovieDataByPage(page, topRatedMovies, setTopRatedMovies, path);
    }
    
  };

  
  return (

      <div id={styles.Wrapper}>

          <Navbar currentMovie={currentMovie} handleMovieCategorie={handleMovieCategorie}/>

          <div className={styles.movie_container}>

            <Switch>

              <Route path={`/:page?`} exact>
                <Movies movies={popularMovies} />
              </Route>
              
              <Route path={`/upcoming/:page`}>
                <Movies movies={upcomingMovies} />
              </Route>
              
              <Route path={`/toprated/:page`}>
                <Movies movies={topRatedMovies} />
              </Route>
            </Switch>

          </div>

          <Pagination handlePageClick={handlePageClick} currentMovie={currentMovie}/>

      </div>
  );

}


export default App;

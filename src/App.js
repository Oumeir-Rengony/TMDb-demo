import { useEffect, useState } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import styles from './App.module.css';
import Movies from './components/Movies/Movies';
import Navbar from './components/Navbar/Navbar';
import Pagination from './components/Movies/Pagination/Pagination';
import { getMovies } from './Utils/api';


function App() {

  let location = useLocation();
  let location_param = location.pathname.split("/");
  location_param = location_param.filter(item => item);   //remove empty string
  let category = location_param[0] === undefined ? 'popular' : location_param[0];
  let page = location_param[1] === undefined ? 1 : parseInt(location_param[1]);


  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const [currentMovie, setCurrentMovie] = useState(category);

  useEffect ( ()=> {
    
    setCurrentMovie(category);

    if(category === "popular")
      loadMovieData(page, popularMovies, setPopularMovies)
    else if(category === "upcoming")
      loadMovieData(page, upcomingMovies, setUpcomingMovies)
    else
      loadMovieData(page, topRatedMovies, setTopRatedMovies)
    
  }, [location]);


  const loadMovieData = (page, movie, setMovie) => {

    const MovieExist = movie.filter( obj => obj.id===page);

    if(MovieExist.length === 0){

      getMovies(currentMovie, page).then(response => {
        setMovie(prev => [...prev, { id:page, page:page, data:response }]);
      });
    }

  };

  
  return (

    <div id={styles.Wrapper}>

        <Navbar currentMovie={currentMovie} />

        <div className={styles.movie_container}>

          <Switch>

            <Route path={`/`} exact>
              <Redirect to={`/popular/1`} />
            </Route>

            <Route path={`/popular/:page`} exact>
              <Movies movies={popularMovies} />
            </Route>
            
            <Route path={`/upcoming/:page`}>
              <Movies movies={upcomingMovies}/>
            </Route>
            
            <Route path={`/toprated/:page`}>
              <Movies movies={topRatedMovies} />
            </Route>
          </Switch>

        </div>

        <Pagination currentMovie={currentMovie}/>

    </div>
  );

}


export default App;

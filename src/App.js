import { useEffect, useState } from 'react';
import { Switch, Route} from 'react-router-dom';
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

  useEffect ( ()=> {

    const popularMoviesData = getMovies('popular', 1);
    popularMoviesData.then(response => {
      setPopularMovies([{id:1, page:1, data:response}]);
    });
    
  }, []);

  
  return (

      <div id={styles.Wrapper}>

          <Navbar currentMovie={currentMovie}
                  setCurrentMovie={setCurrentMovie} 
                  setUpcomingMovies={setUpcomingMovies}
                  setTopRatedMovies={setTopRatedMovies}
                  topRatedMovies={topRatedMovies}
                  upcomingMovies={upcomingMovies}
                  />

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

          <Pagination 
            currentMovie={currentMovie}
            popularMovies={popularMovies}
            upcomingMovies={upcomingMovies}
            topRatedMovies={topRatedMovies}
            setPopularMovies={setPopularMovies}
            setUpcomingMovies={setUpcomingMovies}
            setTopRatedMovies={setTopRatedMovies}/>

      </div>
  );

}


export default App;

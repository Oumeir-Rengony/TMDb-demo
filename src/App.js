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
  const [pageNo, setPageNo] = useState(1);

  useEffect ( ()=> {

    const popularMoviesData = getMovies('popular', pageNo);
    popularMoviesData.then(response => {
      setPopularMovies([{id:1, page:1, data:response}]);
    });
    
  }, []);

  
  return (

      <div id={styles.Wrapper}>

          <Navbar currentMovie={currentMovie}
                  setCurrentMovie={setCurrentMovie} 
                  setPage={setPageNo}
                  setUpcomingMovies={setUpcomingMovies}
                  setTopRatedMovies={setTopRatedMovies}
                  topRatedMovies={topRatedMovies}
                  upcomingMovies={upcomingMovies}
                  />

          <div className={styles.movie_container}>

            <Switch>

              <Route path={`/popular/:${pageNo}`} exact>
                <Movies movies={popularMovies} page={pageNo}/>
              </Route>
              
              <Route path={`/upcoming/:${pageNo}`}>
                <Movies movies={upcomingMovies} page={pageNo}/>
              </Route>
              
              <Route path={`/toprated/:${pageNo}`}>
                <Movies movies={topRatedMovies} page={pageNo}/>
              </Route>
            </Switch>

          </div>

          <Pagination 
            setPage={setPageNo}
            currentMovie={currentMovie}
            popularMovies={popularMovies}
            setPopularMovies={setPopularMovies}
            setUpcomingMovies={setUpcomingMovies}
            setTopRatedMovies={setTopRatedMovies}/>

      </div>
  );

}


export default App;

import { useEffect, useState } from 'react';
import { Switch, Route} from 'react-router-dom';
import axios from 'axios';
import styles from './App.module.css';
import Movies from './components/Movies/Movies';
import Navbar from './components/Navbar/Navbar';
import { GetPopularMovies, GetUpcomingMovies, GetTopRatedMovies} from './Utils/api';

function App() {

  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect ( ()=> {

    let URLs = [GetPopularMovies(), GetUpcomingMovies(), GetTopRatedMovies()]

    const promiseArray = URLs.map(url => axios.get(url));

    Promise.all(promiseArray)
      .then((response) => {
        setPopularMovies(response[0].data.results);
        setUpcomingMovies(response[1].data.results);
        setTopRatedMovies(response[2].data.results);
      })
      .catch((err) => {
        return err;
      });

  }, []);

  return (

      <div id={styles.Wrapper}>

          <Navbar />

          <div className={styles.movie_container}>
            <Switch>
              <Route path="/" exact>
                <Movies movies={popularMovies}/>
              </Route>
              
              <Route path="/upcoming">
                <Movies movies={upcomingMovies}/>
              </Route>
              
              <Route path="/toprated">
                <Movies movies={topRatedMovies}/>
              </Route>
            </Switch>
          </div>

      </div>
  );

}


export default App;

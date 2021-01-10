import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './App.module.css';
import Movies from './components/Movies/Movies';
import { GetPopularMovies, GetUpcomingMovies, GetTopRatedMovies} from './Utils/api';

function App() {

  const [popularMovies, setPopularMovies] = useState([]);
  
  useEffect ( ()=> {
    axios.get(GetPopularMovies())
      .then(response => {
        setPopularMovies(response.data.results);
      })
      .catch( err => {
        console.log(err);
      });

  }, []);

  return (

      <div id={styles.Wrapper}>
        <Movies movies={popularMovies}/>
      </div>
  );

}


export default App;

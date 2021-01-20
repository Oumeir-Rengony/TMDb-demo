import { useEffect, useState } from 'react';
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


  const LoadMovieData = (currentCategory) => {

    const initialUpcomingData = upcomingMovies[0].data.length === 0;
    const initialTopRatedData = topRatedMovies[0].data.length===0;

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

const handleMovieCategorie = (e) => {
    let currentCategory = e.target.innerText;
    setCurrentMovie(currentCategory);
    LoadMovieData(currentCategory);
};

const handlePageClick = (e) => {

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

  
  return (

      <div id={styles.Wrapper}>

          <Navbar currentMovie={currentMovie}handleMovieCategorie={handleMovieCategorie}/>

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

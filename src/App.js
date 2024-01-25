import { useEffect, useState } from 'react';
import './App.css';

import Movies from './Movies';

const apiKey = 'e2c70d159f475c3cf6bd625fd21f2312';

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`)
    .then(res => {
      return res.json()
    })
    .then(response => {
      setLoading(false);
      setMovies(response.results)
    })
    .catch(error => {
      console.log('Error:.', error)
    })
  }, []);

  return (
    <div className="App">
      {loading && <h2>Carregando...</h2>}

      <Movies movies={movies} />
    </div>
  );
}

export default App;

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Movies from '../../Movies';

const apiKey = 'e2c70d159f475c3cf6bd625fd21f2312';

const Home = () => {
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
       <>
            {loading && <h2>Carregando...</h2>}

            <Movies movies={movies} />
        </>
    );
};

export default Home;
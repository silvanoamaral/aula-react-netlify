import { Link } from 'react-router-dom';

const formatDate = (date) => {
  const data = new Date(date);

  return data.toLocaleDateString();
} 

const Movies = ({ movies }) => {
  return <div className="movies">
    {movies.map((movie) => {
    return <Link to={`/details/${movie.id}`} key={movie.id}>
      <div className="card-movie">
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.overview} />
        <h2>{movie.original_title}</h2>
        <p>{formatDate(movie.release_date)}</p>
      </div>
    </Link>
  })}
  </div>
}

export default Movies;
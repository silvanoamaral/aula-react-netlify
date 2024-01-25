const formatDate = (date) => {
  const data = new Date(date);

  return data.toLocaleDateString();
} 

const Movies = ({ movies }) => {
  return <div className="movies">
    {movies.map((movie) => {
    return <div className="card-movie">
      <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.overview} />
      <h2>{movie.original_title}</h2>
      <p>{formatDate(movie.release_date)}</p>
      
    </div>
  })}
  </div>
}

export default Movies;
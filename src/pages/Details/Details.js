import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const apiKey = 'e2c70d159f475c3cf6bd625fd21f2312';

const Details = () => {
    const parameters = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const { idMovie } = parameters;

        if (idMovie) {
            setLoading(true);

            fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${apiKey}&language=pt-BR`)
            .then(res => {
                return res.json()
            })
            .then(response => {
                setLoading(false);
                setMovie(response)
            })
            .catch(error => {
                console.log('Error:.', error)
            })
        }
    }, [parameters]);

    return (
        <div className='page-details'>
            {loading && <h2>Carregando...</h2>}

            {movie && 
                <>
                    <p>{movie.title}</p>
                    <p>{movie.overview}</p>
                    <p>{movie.vote_average}%</p>

                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.overview} />
                </>
            }
            <br />
            <Link to='/' className='btn-voltar'>Voltar</Link>
        </div>
    );
};

export default Details;
import { Link, useParams } from 'react-router-dom';
import { Loading } from '../../components';
import { useFetch } from '../../hooks/useFetch';

import { API_KEY_THE_MOVIE } from '../../config';

const Details = () => {
    const parameters = useParams();
    const { idMovie } = parameters;

    const [loading, data] = useFetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${API_KEY_THE_MOVIE}&language=pt-BR`)
    
    if (loading) {
        return <Loading mensagem="Carregando detalhes do Vídeo..." />
    }

    return (
        <>
            {data && 
                <div className='page-details'>
                    <h2>{data.title}</h2>
                    <p>{data.overview}</p>
                    <p>{data.vote_average}%</p>

                    <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt={data.overview} />

                    <br />
                    <Link to='/' className='btn-voltar'>Voltar</Link>
                </div>
            }
        </>
    );
};

export default Details;
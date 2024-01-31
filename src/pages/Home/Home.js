import Movies from '../../Movies';

import { Loading } from '../../components';

import { useFetch } from '../../hooks/useFetch';

import { API_KEY_THE_MOVIE } from '../../config';

const Home = () => {
  const [loading, data] = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY_THE_MOVIE}&language=pt-BR&page=1`)

  if (loading) {
    return <Loading mensagem="Carregando os Vídeos..." />
  }

  return (<Movies movies={data?.results || []} />);
};

export default Home;
import { useSearchParams } from 'react-router-dom';

import SearchForm from '../components/SearchForm';
import ListSeacrMovies from '../components/ListSeacrMovies';

const Movies = ({ onLocation }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const getSearchTitle = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    onLocation(query);
  };

  return (
    <main>
      <SearchForm onQuery={query} onSubmit={getSearchTitle} />
      {query && <ListSeacrMovies query={query} />}
    </main>
  );
};

export default Movies;

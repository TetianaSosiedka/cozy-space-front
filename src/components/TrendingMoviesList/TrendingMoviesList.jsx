import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import useApiDetails from '../../hooks/useApiDetails';

import { Ul, H2, InfoBlock } from './TrendingMovisList.styled';
import MovieItem from '../MovieItem';

const TrendingMovisList = ({ title }) => {
  const locationPathname = useLocation().pathname;
  const { errorMessage, trendsMovies, setApiMoveDetails } = useApiDetails();

  useEffect(() => {
    setApiMoveDetails({ locationPathname });
  }, [locationPathname, setApiMoveDetails]);
  return (
    <main>
      <H2>{title}</H2>
      {errorMessage.length === 0 && trendsMovies.length === 0 && (
        <InfoBlock>Loading ...</InfoBlock>
      )}
      {trendsMovies.length > 0 && (
        <Ul>
          {trendsMovies.map(movie => (
            <MovieItem key={movie.id} movieDetails={movie} />
          ))}
        </Ul>
      )}
      {errorMessage.length > 0 && <InfoBlock>{errorMessage}</InfoBlock>}
    </main>
  );
};

TrendingMovisList.propTypes = {
  homeTitle: PropTypes.string,
};

export default TrendingMovisList;

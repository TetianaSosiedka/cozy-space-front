import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Ul, InfoBlock } from './ListSeacrMovies.styled';

import useApiDetails from '../../hooks/useApiDetails';

const ListSeacrMovies = ({ query }) => {
  const locationPathname = `${useLocation().pathname || ''}${
    useLocation().search || ''
  }`;

  const { errorMessage, searchMoviews, setApiMoveDetails } = useApiDetails();

  useEffect(() => {
    if (query) {
      setApiMoveDetails({ locationPathname, query });
    }
  }, [locationPathname, setApiMoveDetails, query]);

  return (
    <>
      {errorMessage.length === 0 && searchMoviews.length === 0 && (
        <InfoBlock>Loading ...</InfoBlock>
      )}
      {errorMessage.length > 0 && <InfoBlock>{errorMessage}</InfoBlock>}
      {searchMoviews.length > 0 && (
        <Ul>
          {searchMoviews.map(item => (
            <li key={item.id}>
              <Link to={`${item.id}`}>{item.original_title}</Link>
            </li>
          ))}
        </Ul>
      )}
    </>
  );
};

ListSeacrMovies.propTypes = {
  query: PropTypes.string.isRequired,
};

export default ListSeacrMovies;

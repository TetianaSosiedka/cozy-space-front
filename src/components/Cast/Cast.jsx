import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { InfoBlock } from './Cast.styled';
import useApiDetails from '../../hooks/useApiDetails';

const Cast = () => {
  const { basicUrl, profileActors, errorMessage, setApiMoveDetails } =
    useApiDetails();

  const { movieId } = useParams();
  const locationPathname = useLocation().pathname || '';

  useEffect(
    () => setApiMoveDetails({ locationPathname, movieId }),
    [locationPathname, movieId, setApiMoveDetails]
  );

  return (
    <>
      {errorMessage.length === 0 && profileActors.length === 0 && (
        <InfoBlock>Loading ...</InfoBlock>
      )}
      {errorMessage.length > 0 && <InfoBlock>{errorMessage}</InfoBlock>}
      {profileActors.length > 0 && (
        <ul>
          {profileActors.map(actor => {
            const posterPath = actor.profile_path
              ? [basicUrl, actor.profile_path].join('')
              : 'http://dummyimage.com/150x200/329fd6.gif&text=Actor+Photo!';
            return (
              <li key={actor.id}>
                <img
                  src={posterPath}
                  alt={actor.name}
                  width="150"
                  loading="lazy"
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Cast;

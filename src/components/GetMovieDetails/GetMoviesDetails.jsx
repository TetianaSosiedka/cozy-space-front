import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import {
  Article,
  Poster,
  InformationBlock,
  AdditionalBlock,
  InfoBlock,
} from './GetMoviesDetails.styled';

import useApiDetails from '../../hooks/useApiDetails';

const GetMoviesDetails = () => {
  const locationPathname = useLocation().pathname;
  const { movieId } = useParams();

  const {
    errorMessage,
    basicUrl,
    title,
    releaseDate,
    rating,
    overview,
    genres,
    poster,
    setApiMoveDetails,
  } = useApiDetails();

  useEffect(() => {
    setApiMoveDetails({ locationPathname, movieId });
  }, [locationPathname, movieId, setApiMoveDetails]);

  const renderGanres = () => {
    const ganresArr = [];
    genres.map(item => ganresArr.push(item.name));
    return ganresArr.join(', ');
  };

  return (
    <>
      {errorMessage.length === 0 && title.length === 0 && (
        <InfoBlock>Loading ...</InfoBlock>
      )}
      {title.length > 0 && (
        <>
          <Article>
            <InformationBlock>
              <h2>
                {title} ({releaseDate})
              </h2>
              <p>User Score: {rating}</p>
              <h3>Overvlew</h3>
              <p>{overview}</p>
              <h3>Genres: </h3>
              <p>{renderGanres()}</p>
            </InformationBlock>
            <Poster
              src={[basicUrl, poster].join('')}
              alt={title}
              height="300"
            />
          </Article>
          <AdditionalBlock>
            <h3>Additional information:</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </AdditionalBlock>
        </>
      )}
      {errorMessage.length > 0 && <InfoBlock>{errorMessage}</InfoBlock>}
    </>
  );
};
export default GetMoviesDetails;

import { useLayoutEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { InfoBlock } from './Reviews.styled';

import useApiDetails from '../../hooks/useApiDetails';

const Reviews = () => {
  const { movieId } = useParams();
  const locationPathname = useLocation().pathname || '';

  const { reviews, errorMessage, setApiMoveDetails } = useApiDetails();

  useLayoutEffect(
    () => setApiMoveDetails({ locationPathname, movieId }),
    [locationPathname, movieId, setApiMoveDetails]
  );

  return (
    <>
      {errorMessage.length > 0 && <InfoBlock>{errorMessage}</InfoBlock>}
      <ul>
        {reviews.length ? (
          reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>"{review.content}"</p>
            </li>
          ))
        ) : (
          <li>We don't have any reviews for this movie</li>
        )}
      </ul>
    </>
  );
};
export default Reviews;

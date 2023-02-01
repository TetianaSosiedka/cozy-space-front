import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieItem = ({ movieDetails }) => {
  return (
    <li>
      <Link to={`/movies/${movieDetails.id}`}>{movieDetails.title}</Link>
    </li>
  );
};

MovieItem.prototype = {
  movieDetails: PropTypes.array.isRequired,
};

export default MovieItem;

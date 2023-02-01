import ButtonBack from '../components/ButtonBack';
import GetMovieDetails from '../components/GetMovieDetails';

const MovieDetails = ({ locationParam }) => {
  return (
    <main>
      <ButtonBack locationParam={locationParam} />
      <GetMovieDetails />
    </main>
  );
};

export default MovieDetails;

import { lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../SharedLayout';

const Home = lazy(() =>
  import('../../pages/home' /* webpackChunkName: "Home" */)
);
const Movies = lazy(() =>
  import('../../pages/movies' /* webpackChunkName: "Movies" */)
);
const MovieDetails = lazy(() =>
  import('../../pages/movieDetails' /* webpackChunkName: "MovieDetails" */)
);
const Cast = lazy(() => import('../Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "Reviews" */)
);

export const App = () => {
  const [locationParam, setLocationParam] = useState('');

  const handleLocation = query => {
    setLocationParam(query);
  };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies onLocation={handleLocation} />} />
        <Route
          path="movies/:movieId"
          element={<MovieDetails locationParam={locationParam} />}
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

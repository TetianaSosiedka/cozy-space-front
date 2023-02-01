import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Li, Header, Container } from './SharedLayout.styled';

import Loader from '../Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <ul>
            <Li>
              <NavLink to="/">Home</NavLink>
            </Li>
            <Li>
              <NavLink to="/movies">Movies</NavLink>
            </Li>
          </ul>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default SharedLayout;

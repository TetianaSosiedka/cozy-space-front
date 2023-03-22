import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Restricted = () => {
  const { token } = useSelector(state => state.auth);

  return token ? <Navigate to="/mycabinet" replace /> : <Outlet />;
};

export default Restricted;

import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from './ButtonBack.styled';

const ButtonBack = ({ locationParam }) => {
  const navigate = useNavigate();

  const goBack = () => {
    if (!locationParam) {
      navigate('/');
      return;
    }
    navigate(`/movies?query=${locationParam}`);
  };

  return (
    <Button type="button" onClick={goBack}>
      <span>&lArr;</span> Go back
    </Button>
  );
};

ButtonBack.propTypes = {
  locationParam: PropTypes.string,
};

export default ButtonBack;

import icons from 'images/icons.svg';
import { ButtonStyle } from './Button.styled';

const Button = ({ type = 'button', iconId, children }) => {
  return (
    <ButtonStyle type={type}>
      <svg>
        <use href={icons + `#${iconId}`}></use>
      </svg>
      {children}
    </ButtonStyle>
  );
};

export default Button;

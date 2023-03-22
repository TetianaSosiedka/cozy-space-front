import icons from 'images/icons.svg';
import { ButtonStyle } from './Button.styled';

const Button = ({ type = 'button', iconId, children, onClick }) => {
  return (
    <ButtonStyle type={type} onClick={onClick}>
      {iconId && (
        <svg>
          <use href={icons + `#${iconId}`}></use>
        </svg>
      )}
      {children}
    </ButtonStyle>
  );
};

export default Button;

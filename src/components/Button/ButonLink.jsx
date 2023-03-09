import icons from 'images/icons.svg';
import { ButtonLinkStyle } from './Button.styled';

const ButtonLink = ({ iconId, children }) => {
  return (
    <ButtonLinkStyle>
      {iconId && (
        <svg>
          <use href={icons + `#${iconId}`}></use>
        </svg>
      )}
      {children}
    </ButtonLinkStyle>
  );
};

export default ButtonLink;

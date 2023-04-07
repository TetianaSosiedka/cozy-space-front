import icons from 'images/icons.svg';

import { LinkStyle } from './Button.styled';

const ButtonLink = ({ link, children, iconId = '' }) => {
  return (
    <LinkStyle to={link}>
      {iconId && (
        <svg>
          <use href={icons + `#${iconId}`}></use>
        </svg>
      )}
      {children}
    </LinkStyle>
  );
};

export default ButtonLink;

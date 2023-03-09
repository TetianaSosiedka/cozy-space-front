import { LinkStyle } from './Button.styled';

export { LinkStyle } from './Button.styled';

const Link = ({ link, children }) => {
  return <LinkStyle to={link}>{children}</LinkStyle>;
};

export default Link;

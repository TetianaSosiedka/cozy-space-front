import { Link } from 'react-router-dom';

import Container from 'components/Container/Container';
import lightLogo from 'images/lightLogo.png';

import { FooterContainer, Logo } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Link to="/">
          <Logo src={lightLogo} alt="logo" />
        </Link>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

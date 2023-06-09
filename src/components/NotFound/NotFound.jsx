import Img404 from 'images/404.jpg';
import { Container, Span, Img, Message } from './NotFound.styled';

export const NotFound = ({ children }) => {
  return (
    <Container>
      <Span>404</Span>
      <Img src={Img404} alt="page not found" width="250" height="250" />
      <Message>{children}</Message>
    </Container>
  );
};

export default NotFound;

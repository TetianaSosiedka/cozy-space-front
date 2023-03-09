import { TitleStyle, Line } from './Title.styled';

const Title = ({ children }) => {
  return (
    <>
      <TitleStyle>{children}</TitleStyle>
      <Line />
    </>
  );
};

export default Title;

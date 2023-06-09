import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 0;
  text-align: center;
`;

export const Span = styled.span`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  font-family: ${props => props.theme.fonts.headers};
  font-size: 50px;
  font-weight: 700;
  color: ${props => props.theme.colors.accentActive};
`;

export const Img = styled.img`
  width: 50%;
  height: auto;
  margin-bottom: 40px;

  @media ${props => props.theme.screens.tablet} {
    width: 25%;
  }
  @media ${props => props.theme.screens.desktop} {
  }
`;

export const Message = styled.p`
  width: 100%;
  margin-bottom: 40px;
  font-size: 30px;
  font-family: ${props => props.theme.fonts.headers};
`;

import styled from 'styled-components';

export const TitleStyle = styled.span`
  display: inline-block;
  margin-top: 50px;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0.02em;
  font-family: ${props => props.theme.fonts.headers};
  color: ${props => props.theme.colors.accentActive};
  @media ${props => props.theme.screens.tablet} {
    font-size: 30px;
  }
`;

export const Line = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.colors.accent};
`;

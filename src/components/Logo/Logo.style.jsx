import styled from 'styled-components';

export const Img = styled.img`
  width: 300px;
  @media ${props => props.theme.screens.tablet} {
    width: 250px;
  }
  @media ${props => props.theme.screens.desktop} {
    width: 350px;
  }
`;

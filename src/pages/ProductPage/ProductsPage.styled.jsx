import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;
  padding-bottom: 60px;
  margin: 0 -30px;
`;

export const ProductWrap = styled.div`
  margin-bottom: 15px;
  width: 50%;
  @media ${props => props.theme.screens.tablet} {
    flex-basis: calc((100%) / 3);
  }
  @media ${props => props.theme.screens.desktop} {
    flex-basis: calc((100%) / 4);
  }
`;

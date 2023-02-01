import styled from 'styled-components';

export const ContainerDiv = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;

  @media ${props => props.theme.screens.mobile} {
    width: ${props => props.theme.screensWidth.mobileWidth};
  }
  @media ${props => props.theme.screens.tablet} {
    width: ${props => props.theme.screensWidth.tabletWidth};
  }
  @media ${props => props.theme.screens.desktop} {
    width: ${props => props.theme.screensWidth.desktopWidth};
  }
`;

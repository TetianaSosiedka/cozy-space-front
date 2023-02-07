import styled from 'styled-components';

export const NavStyle = styled.nav`
  display: block;
  position: relative;
  width: 100%;
  border-top: 2px solid ${props => props.theme.colors.accentActive};
  border-bottom: 2px solid ${props => props.theme.colors.accentActive};
  background-color: ${props => props.theme.colors.accentLight};
  color: ${props => props.theme.colors.accentActive};
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

export const Li = styled.li`
  a {
    display: block;
    padding: 10px 18px;
    font-family: ${props => props.theme.fonts.headers};
    font-size: 16px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.accentActive};
    :hover:not(.active),
    :focus-visible:not(.active) {
      color: ${props => props.theme.colors.accentActive};
      opacity: 0.7;
      transition: opacity 0.25s ${props => props.theme.action.timingFunction};
    }
  }
`;

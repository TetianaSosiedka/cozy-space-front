import styled from 'styled-components';

export const NavStyle = styled.nav`
  display: block;
  position: relative;
  width: 100%;
  border-top: 2px solid ${props => props.theme.colors.accentText};
  border-bottom: 2px solid ${props => props.theme.colors.accentText};
  background-color: ${props => props.theme.colors.accentLight};
  color: ${props => props.theme.colors.texAccent};
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

    font-size: 14px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.accentText};
    :hover:not(.active),
    :focus-visible:not(.active) {
      color: ${props => props.theme.colors.activeText};
      opacity: 0.7;
      transition: opacity ${props => props.theme.action.timingFunction};
    }
  }
`;
import styled from 'styled-components';

const LiStyle = `  
display: block;
  padding: 10px 18px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  `;

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
  ${LiStyle};
  font-family: ${props => props.theme.fonts.headers};
  color: ${props => props.theme.colors.accentActive};
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${props => props.theme.colors.accentActive};
    opacity: 0.7;
    transition: opacity 0.25s ${props => props.theme.action.timingFunction};
  }
`;
export const HiddenNav = styled.div`
  position: absolute;
  margin-top: 2px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
  background-color: ${props => props.theme.colors.accent};
  border-bottom: 1px solid ${props => props.theme.colors.accentActive};
  a {
    ${LiStyle};
    font-family: ${props => props.theme.fonts.headers};
    font-weight: 500;
    color: ${props => props.theme.colors.accentDark};
    transition: color 0.25s ${props => props.theme.action.timingFunction};
    :hover:not(.active),
    :focus-visible:not(.active) {
      color: ${props => props.theme.colors.accentLight};
      transition: color 0.25s ${props => props.theme.action.timingFunction};
    }
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = `
 display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 30px;

  border: none;
  border-radius: 3px;  
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;  
  svg {
    margin-right: 5px;
    height: 20px;
    width: 20px;
  }
  `;

export const ButtonStyle = styled.button`
  ${Button}
  font-family: ${props => props.theme.fonts.headers};
  box-shadow: inset 0 0 2px ${props => props.theme.colors.accentActive};
  color: ${props => props.theme.colors.accentDark};
  background-color: ${props => props.theme.colors.accent};
  transition: 0.25s ${props => props.theme.action.timingFunction};
  svg {
    fill: ${props => props.theme.colors.accentDark};
    transition: 0.25s ${props => props.theme.action.timingFunction};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.accentActive};
    transition: 0.5s ${props => props.theme.action.timingFunction};
    svg {
      fill: ${props => props.theme.colors.accent};
    }
  }
`;

export const LinkStyle = styled(Link)`
  ${Button}
  padding-top: 12px;
  padding-bottom: 11px;
  font-family: ${props => props.theme.fonts.headers};
  box-shadow: inset 0 0 2px ${props => props.theme.colors.accentActive};
  color: ${props => props.theme.colors.accentDark};
  background-color: ${props => props.theme.colors.accent};
  transition: 0.25s ${props => props.theme.action.timingFunction};
  svg {
    fill: ${props => props.theme.colors.accentDark};
    transition: 0.25s ${props => props.theme.action.timingFunction};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.accentActive};
    transition: 0.5s ${props => props.theme.action.timingFunction};
    svg {
      fill: ${props => props.theme.colors.accent};
    }
  }
`;

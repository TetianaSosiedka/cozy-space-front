import styled from 'styled-components';

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border: none;
  border-radius: 3px;
  font-family: ${props => props.theme.fonts.headers};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  box-shadow: inset 0 0 2px ${props => props.theme.colors.accentActive};
  color: ${props => props.theme.colors.accentDark};
  background-color: ${props => props.theme.colors.accent};
  transition: 0.25s ${props => props.theme.action.timingFunction};
  svg {
    margin-right: 5px;
    height: 20px;
    width: 20px;
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
  @media screen and (min-width: 551px) {
    width: 100%;
  }
`;

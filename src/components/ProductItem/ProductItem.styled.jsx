import styled from 'styled-components';

export const ItemWrap = styled.a`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  //@media screen and (min-width: 550px) {
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
  //}
  :hover {
    cursor: pointer;
  }
`;

export const OverlayWrap = styled.div`
  position: relative;
  :hover > div {
    height: 100%;
  }
`;

export const Img = styled.img``;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.accentActive};
  opacity: 0.85;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ${props => props.theme.action.timingFunction};
  img {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
  }
`;

export const Caption = styled.div`
  width: 100%;
  padding-top: 30px;
`;

export const Details = styled.p`
  position: relative;
  padding-bottom: 20px;

  svg {
    position: absolute;
    right: 10px;
    bottom: 15px;
    width: 30px;
    height: 30px;
    //fill: ${props => props.theme.colors.accentActive};
    fill: red;
    transition: color 0.5s ${props => props.theme.action.timingFunction};
    :hover,
    :focus {
      fill: ${props => props.theme.colors.accent};
      transition: color 0.5s ${props => props.theme.action.timingFunction};
    }
  }
`;

export const Price = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.accentActive};
`;
export const ButtonsWrap = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.accentActive};
  transition: 0.5s ${props => props.theme.action.timingFunction};
  :not(:last-child) {
    border-right: solid 1px ${props => props.theme.colors.accent};
  }
  svg {
    margin-right: 5px;
    height: 20px;
    width: 20px;
    fill: ${props => props.theme.colors.accent};
    transition: 0.5s ${props => props.theme.action.timingFunction};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${props => props.theme.colors.accentDark};
    background-color: ${props => props.theme.colors.accent};
    transition: 0.5s ${props => props.theme.action.timingFunction};
    svg {
      fill: ${props => props.theme.colors.accentDark};
    }
  }
  @media screen and (min-width: 551px) {
    width: 100%;
  }
`;

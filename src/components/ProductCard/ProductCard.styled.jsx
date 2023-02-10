import styled from 'styled-components';

export const ItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${props => props.theme.colors.accentActive};
  opacity: 0.85;
  overflow: hidden;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: 0.5s ${props => props.theme.action.timingFunction};
  img {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`;

export const Description = styled.p`
  padding: 10px;
  font-family: ${props => props.theme.fonts.body};
  font-size: 12px;
  color: ${props => props.theme.colors.accent};
  transition: color 0.25s ${props => props.theme.action.timingFunction};
  @media ${props => props.theme.screens.mobile} {
    line-height: 1.3;
    padding: 15px;
    font-size: 14px;
  }
  transition: color 0.25s ${props => props.theme.action.timingFunction};
  :hover,
  :focus {
    color: ${props => props.theme.colors.accentLight};
  }
`;

export const Caption = styled.div`
  width: 100%;
  padding-top: 15px;
  background-color: #ffffff;
  box-shadow: ${props => props.theme.colors.accentActive} 0px -45px 30px -28px
    inset;
  transition: box-shadow 0.25s ${props => props.theme.action.timingFunction};
  @media ${props => props.theme.screens.tablet} {
    padding-top: 20px;
  }
  :hover,
  :focus {
    box-shadow: ${props => props.theme.colors.accentActive} 0px -45px 33px -25px
      inset;
    transition: box-shadow 0.25s ${props => props.theme.action.timingFunction};
  }
`;

export const Details = styled.div`
  position: relative;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ButtonHeart = styled.button`
  border: none;
  position: absolute;
  right: 10px;
  bottom: 15px;
  background-color: transparent;
  svg {
    width: 30px;
    height: 30px;
    fill: ${props => props.theme.colors.accentActive};
    transition: color 0.25s ${props => props.theme.action.timingFunction};
  }
  :hover svg,
  :focus svg {
    fill: red;
    transition: color 0.25s ${props => props.theme.action.timingFunction};
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.headers};
  font-weight: 500;
  font-size: 15px;
  @media ${props => props.theme.screens.mobile} {
    padding-bottom: 2px;
    font-size: 16px;
  }
`;

export const ShortDescription = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-weight: 400;
  font-size: 14px;
  @media ${props => props.theme.screens.mobile} {
    font-size: 16px;
  }
`;

export const Price = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
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
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  font-family: ${props => props.theme.fonts.headers};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
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

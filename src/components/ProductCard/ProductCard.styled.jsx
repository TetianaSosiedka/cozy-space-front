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
  width: 100%;
  height: 295px;
  overflow: hidden;
  @media ${props => props.theme.screens.tablet} {
    height: 315px;
  }
  @media ${props => props.theme.screens.desktop} {
    height: 400px;
  }
  :hover > div {
    height: 100%;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.accentActive};
  opacity: 0.85;
  overflow: hidden;
  width: 100%;
  height: 100%;
  height: 0;
  overflow: hidden;
  transition: 0.5s ${props => props.theme.action.timingFunction};
  img {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
`;

export const Description = styled.p`
  padding: 15px;
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
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
  background-color: #ffffff;
  box-shadow: ${props => props.theme.colors.accentActive} 0px -45px 30px -26px
    inset;
  transition: box-shadow 0.25s ${props => props.theme.action.timingFunction};
  border-radius: 0 0 3px 3px;
  @media ${props => props.theme.screens.tablet} {
    padding-top: 20px;
  }
  :hover,
  :focus {
    box-shadow: ${props => props.theme.colors.accentActive} 0px -50px 36px -28px
      inset;
    transition: box-shadow 0.25s ${props => props.theme.action.timingFunction};
  }
  a {
    width: 100%;
  }
`;

export const Details = styled.div`
  position: relative;
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ButtonHeart = styled.button`
  border: none;
  position: absolute;
  right: 25px;
  bottom: 50px;
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
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.accentActive};
`;
export const ButtonsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;

import styled from 'styled-components';
import { UnderlineAfter } from '../App/App.styled';

export const HeaderStyle = styled.header`
  position: relative;
  font-family: ${props => props.theme.fonts.body};
`;

export const FixedWrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 10001;
  width: 100%;
  background-color: ${props => props.theme.colors.accentActive};
  a {
    display: flex;
    height: 50px;
    align-items: center;
    margin-left: 15px;
    color: ${props => props.theme.colors.accent};
  }
  svg {
    width: 28px;
    height: 28px;
    margin-right: 5px;
    padding-top: 5px;
    fill: ${props => props.theme.colors.accent};
  }
  @media ${props => props.theme.screens.tablet} {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);
  }
`;

export const HeaderWrap = styled.div`
  padding-top: 70px;
  padding-bottom: 50px;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.accentActive};
  @media ${props => props.theme.screens.tablet} {
    display: flex;
    padding-top: 50px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  @media ${props => props.theme.screens.tablet} {
    flex-wrap: wrap;
    align-items: center;
    flex-basis: calc(100% / 3);
    margin-bottom: 0;
    padding-left: 15px;
  }
`;

export const Timetable = styled.div`
  font-size: 14px;
  p:not(:last-child) {
    margin-bottom: 5px;
  }
  @media ${props => props.theme.screens.desktop} {
    font-size: 16px;
  }
`;

export const Address = styled.address`
  @media ${props => props.theme.screens.tablet} {
    width: 100%;
  }
  a {
    position: relative;
    display: flex;
    margin-bottom: 5px;
    font-size: 14px;
    color: ${props => props.theme.colors.accentActive};
    :hover:not(.active),
    :focus-visible:not(.active) {
      color: ${props => props.theme.colors.accentActive};
      opacity: 0.7;
      div::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
      transition: opacity 0.25s ${props => props.theme.action.timingFunction};
    }
    @media ${props => props.theme.screens.desktop} {
      font-size: 16px;
    }
    svg {
      margin-right: 3px;
      width: 20px;
      height: 20px;
      fill: ${props => props.theme.colors.accentActive};
      @media ${props => props.theme.screens.desktop} {
        width: 22px;
        height: 22px;
      }
    }
  }
`;

export const Underline = styled.div`
  display: flex;
  position: relative;
  ::after {
    ${UnderlineAfter};
    background-color: ${props => props.theme.colors.accentActive};
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  flex-basis: calc((100% / 3));
  justify-content: center;
`;

export const RightColumn = styled.div`
  position: fixed;
  top: 8px;
  right: 0;
  z-index: 10001;
  padding-right: 15px;
  @media ${props => props.theme.screens.tablet} {
    position: relative;
    display: flex;
    flex-basis: calc((100% / 3));
    align-items: center;
    justify-content: flex-end;
  }
  a:hover:not(.active),
  a:focus-visible:not(.active) {
    color: ${props => props.theme.colors.accent};
    @media ${props => props.theme.screens.tablet} {
      color: ${props => props.theme.colors.accentActive};
    }
    opacity: 0.7;
    transition: opacity 0.25s ${props => props.theme.action.timingFunction};
  }
  span {
    color: #000000;
    font-size: 20px;
  }
  svg {
    width: 28px;
    height: 28px;
    margin-left: 15px;
    fill: ${props => props.theme.colors.accent};
    @media ${props => props.theme.screens.tablet} {
      width: 37px;
      height: 37px;
      margin-left: 20px;
      fill: ${props => props.theme.colors.accentActive};
    }
  }
`;

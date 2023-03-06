import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;
  padding-bottom: 60px;
  font-family: ${props => props.theme.fonts.body};
`;

export const GalleruWrap = styled.div`
  @media ${props => props.theme.screens.tablet} {
    width: calc(50%);
  }
`;

export const RightColumn = styled.div`
  @media ${props => props.theme.screens.tablet} {
    width: calc(50% - 30px);
    padding-left: 30px;
  }
`;

export const ProducrTitle = styled.h2`
  margin-top: 25px;
  font-family: ${props => props.theme.fonts.headers};
  font-weight: 700;
  font-size: 30px;
  color: ${props => props.theme.colors.accentActive};
  @media ${props => props.theme.screens.tablet} {
    margin-top: 0;
    font-size: 40px;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 100%;
  @media ${props => props.theme.screens.tablet} {
    margin-top: 40px;
  }
`;

export const Price = styled.p`
  margin-left: 25px;
  font-size: 35px;
  font-weight: 500;
  span {
    display: inline-block;
    margin-left: 7px;
    font-size: 18px;
  }
`;

export const Calculator = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px ${props => props.theme.colors.accent};
  font-weight: 400;
  div {
    padding: 5px 15px;
    font-size: 18px;
    transition: color 0.25s ${props => props.theme.action.timingFunction};
  }
  div:nth-child(2n) {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 25px;
  }
  div:nth-child(2n + 1):hover,
  div:nth-child(2n + 1):focus {
    color: ${props => props.theme.colors.accent};
    transition: color 0.25s ${props => props.theme.action.timingFunction};
  }
`;

export const Ditails = styled.div`
  margin-top: 20px;
  padding: 10px 0;
  width: 100%;
  border-top: solid 1px ${props => props.theme.colors.accent};
  border-bottom: solid 1px ${props => props.theme.colors.accent};
  p {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    span {
      display: inline-block;
      margin-left: 10px;
      font-weight: 400;
    }
  }
  @media ${props => props.theme.screens.tablet} {
    margin-top: 40px;
  }
`;

export const Available = styled.p`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.accent};
  svg {
    margin-right: 5px;
    width: 18px;
    height: 18px;
    fill: ${props => props.theme.colors.accent};
  }
`;

export const Description = styled.p`
  margin-top: 40px;
  line-height: 1.4;
`;

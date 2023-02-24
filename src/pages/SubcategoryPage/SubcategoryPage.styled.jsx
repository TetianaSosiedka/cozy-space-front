import styled from 'styled-components';
import { UnderlineAfter } from 'components/App/App.styled';

export const Appeal = styled.span`
  display: inline-block;
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 25px;
  font-family: ${props => props.theme.fonts.headers};
  color: ${props => props.theme.colors.accentActive};
  @media ${props => props.theme.screens.tablet} {
    font-size: 30px;
  }
`;

export const Checklist = styled.div`
  margin-top: 20px;
  padding-bottom: 30px;
  border-top: solid 2px ${props => props.theme.colors.accent};
  border-bottom: solid 2px ${props => props.theme.colors.accent};
`;

export const Question = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: ${props => props.theme.fonts.body};
`;

export const QuestionName = styled.span`
  display: flex;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
  font-family: ${props => props.theme.fonts.headers};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
`;

export const InputWrap = styled.div`
  transition: color 0.25s ${props => props.theme.action.timingFunction};
  :hover {
    :hover span {
      color: ${props => props.theme.colors.accent};
      transition: color 0.25s ${props => props.theme.action.timingFunction};
    }
    span::after {
      transform: scaleX(1);
      transform-origin: bottom left;
      transition: transform 0.5s ease-out;
    }
  }

  input[type='radio'] {
    margin-right: 5px;
    margin-left: 30px;
    accent-color: ${props => props.theme.colors.accent};
    :checked + span {
      color: ${props => props.theme.colors.accent};
    }
    :checked + span::after {
      transform: scaleX(1);
      transform-origin: bottom left;
      transition: transform 0.5s ease-out;
    }
  }

  span {
    position: relative;
    display: inline-block;
    font-size: 16px;
    ::after {
      ${UnderlineAfter};
      background-color: ${props => props.theme.colors.accent};
    }

    @media ${props => props.theme.screens.tablet} {
      font-size: 18px;
    }
  }
`;

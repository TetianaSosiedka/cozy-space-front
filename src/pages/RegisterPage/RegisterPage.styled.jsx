import styled from 'styled-components';
import { UnderlineAfter } from 'components/App/App.styled';

export const WarningMessage = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: ${props => props.theme.fonts.body};
  font-size: 14px;
  a {
    display: inline-block;
    position: relative;
    color: ${props => props.theme.colors.accent};
    ::after {
      ${UnderlineAfter};
      background-color: ${props => props.theme.colors.accent};
    }

    :hover,
    :focus {
      ::after {
        transform: scaleX(1);
        transform-origin: bottom left;
        transition: transform 0.5s ease-out;
      }
    }
  }
`;

export const FormsContainer = styled.div`
  position: relative;
`;

export const RegisterForm = styled.form`
  width: 100%;
  margin-bottom: 60px;
  .css-wb57ya-MuiFormControl-root-MuiTextField-root {
    margin-bottom: 10px;
  }
  button {
    margin-top: 20px;
    width: auto;
  }
  @media ${props => props.theme.screens.tablet} {
    margin-top: 40px;
  }
`;

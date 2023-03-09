import styled from 'styled-components';

export const LoginGrid = styled.div`
  margin-top: 60px;
  @media ${props => props.theme.screens.tablet} {
    display: flex;
  }
`;

export const LoginWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 10px;
  margin-bottom: 15px;
  background-color: ${props => props.theme.colors.accentLight};
  border: solid 2px ${props => props.theme.colors.accentActive};
  svg {
    height: 45px;
    width: 45px;
    margin-right: 15px;
    @media ${props => props.theme.screens.tablet} {
      height: 60px;
      width: 60px;
      margin-right: 30px;
    }
  }
  span {
    display: flex;
    flex-basis: calc(100% - 60px);
    font-family: ${props => props.theme.fonts.body};
    font-size: 19px;
    font-weight: 500;
    @media ${props => props.theme.screens.tablet} {
      font-size: 22px;
      flex-basis: calc(100% - 90px);
    }
  }
  button,
  a {
    margin-top: auto;
  }

  @media ${props => props.theme.screens.tablet} {
    flex-basis: calc(50% - 23px / 2);
    margin-bottom: 40px;
    :first-child {
      margin-right: 15px;
    }
  }
`;

export const ExplainingText = styled.p`
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 14px;
  @media ${props => props.theme.screens.tablet} {
    font-size: 16px;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  margin-top: 15px;
  .css-wb57ya-MuiFormControl-root-MuiTextField-root {
    margin-bottom: 10px;
  }
  button {
    margin-top: 20px;
  }
  @media ${props => props.theme.screens.tablet} {
    margin-top: 40px;
  }
`;

export const ErrorMesage = styled.p`
  margin-bottom: 15px;
  color: ${props => props.theme.colors.accentRed};
`;
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -12px;
  @media ${props => props.theme.screens.tablet} {
    margin-top: -27px;
  }
`;

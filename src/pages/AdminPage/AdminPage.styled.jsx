import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-top: 45px;
  margin-bottom: 45px;
  @media ${props => props.theme.screens.tablet} {
    button {
      max-width: 250px;
    }
  }
`;

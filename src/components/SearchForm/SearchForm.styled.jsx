import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 15px;
  input {
    padding: 5px 8px;
    border: solid 2px #000000;
    font-size: 15px;
    &:focus {
      color: #329fd6;
    }
  }
  button {
    padding: 5px 8px;
    font-size: 15px;
    background-color: transparent;
    &:hover,
    &:focus {
      color: #329fd6;
      border-color: #329fd6;
    }
    &[disabled] {
      background-color: #e9e9ec9f;
    }
  }
`;

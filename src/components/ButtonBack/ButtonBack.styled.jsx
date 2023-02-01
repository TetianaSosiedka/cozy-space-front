import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 15px;
  padding: 5px 8px;
  font-size: 15px;
  background-color: transparent;
  &:hover,
  &:focus {
    color: #329fd6;
    border-color: #329fd6;
  }
  span {
    margin-right: 3px;
    font-weight: bold;
  }
`;

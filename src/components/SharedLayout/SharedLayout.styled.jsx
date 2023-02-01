import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  border-bottom: solid #d1d1d3 4px;
`;

export const Li = styled.li`
  display: inline-block;
  padding: 10px;
  &:nth-child(1) {
    padding-left: 0;
  }
  a {
    font-size: 18px;
    font-weight: 500;
    color: #000000;
  }
  .active {
    color: #329fd6;
  }
`;

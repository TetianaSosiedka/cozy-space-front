import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 40px;
  padding-bottom: 60px;
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  :first-child {
    margin-top: 0;
  }
  margin-bottom: 30px;
  :last-child {
    margin-bottom: 0;
  }
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.theme.colors.accentActive};
`;

export const ProductWrap = styled.div`
  max-width: 65%;
  margin: 0 auto;
  overflow: hidden;
`;

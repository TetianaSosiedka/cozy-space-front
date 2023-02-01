import styled from 'styled-components';

export const Article = styled.article`
  margin-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: row-reverse;
  border-bottom: solid #d1d1d3 4px;
`;

export const InformationBlock = styled.div``;

export const Poster = styled.img`
  margin-right: 15px;
`;

export const AdditionalBlock = styled.div`
  ul {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: solid #d1d1d3 4px;
  }

  li {
    padding: 5px 0;
    &:hover,
    &:focus {
      background-color: #f0f3f7;
    }
    a {
      color: #000000;
    }
  }
`;
export const InfoBlock = styled.p`
  padding-top: 5px;
  color: #329fd6;
`;

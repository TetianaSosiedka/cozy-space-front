import styled from 'styled-components';

export const GaleryWrap = styled.div`
  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:focus {
    border-color: ${props => props.theme.colors.accentActive};
  }
  .image-gallery-svg:hover,
  .image-gallery-svg:active {
    color: ${props => props.theme.colors.accentActive};
  }
  button:hover {
    color: ${props => props.theme.colors.accentActive};
  }
`;

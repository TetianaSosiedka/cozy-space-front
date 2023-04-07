import styled from 'styled-components';

export const AddForm = styled.form`
  legend.css-u4tvz2-MuiFormLabel-root {
    line-height: 2.5;
    font-family: ${props => props.theme.fonts.headers};
    font-weight: 700;
    font-size: 18px;
    color: ${props => props.theme.colors.accent};
  }
  fieldset {
    .MuiFormGroup-root .css-dmmspl-MuiFormGroup-root {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

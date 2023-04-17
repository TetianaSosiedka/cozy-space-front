import styled from 'styled-components';
import Button from '@mui/material/Button';

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

export const Preview = styled.div`
  width: 200px;
  margin-bottom: 15px;
`;

export const UploadButton = styled(Button)`
  &.css-sghohy-MuiButtonBase-root-MuiButton-root {
    display: block;
    margin-right: 20px;
    margin-bottom: 15px;
    width: fit-content;
    background-color: ${props => props.theme.colors.accent};
  }

  &.css-sghohy-MuiButtonBase-root-MuiButton-root:hover {
    background-color: ${props => props.theme.colors.accentActive};
  }
`;

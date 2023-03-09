import styled from 'styled-components';
import { TextField } from '@mui/material';

export const TextFieldStyle = styled(TextField)`
  input {
    font-family: ${props => props.theme.fonts.body};
    font-size: 15px;
  }
  label {
    font-family: ${props => props.theme.fonts.headers};
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.accentActive};
  }
  label.Mui-focused {
    color: ${props => props.theme.colors.accent};
  }
  .MuiInput-underline:after {
    border-bottom-color: ${props => props.theme.colors.accentActive};
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: ${props => props.theme.colors.accentRed};
    }
    :hover fieldset {
      border-color: yellow;
    }
    .Mui-focused fieldset {
      border-color: ${props => props.theme.colors.accentActive};
    }
  }
`;

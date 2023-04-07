import styled from 'styled-components';
import FormControlLabel from '@mui/material/FormControlLabel';

export const FormControlLabelStyle = styled(FormControlLabel)`
  &.css-1f2kvjf-MuiFormControlLabel-root {
    margin-left: 0;
    display: flex;
    justify-content: left;
    :hover,
    :focus {
      span {
        color: ${props => props.theme.colors.accent};
      }
    }
  }

  span {
    font-family: ${props => props.theme.fonts.headers};
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.accentActive};

    &.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked,
    .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate {
      color: ${props => props.theme.colors.accent};

      & ~ span {
        color: ${props => props.theme.colors.accent};
      }
    }
  }
`;

import Checkbox from '@mui/material/Checkbox';
import { FormControlLabelStyle } from './CheckboxFiled.styled';

const CheckboxField = ({ name, label, value, onChange }) => {
  return (
    <FormControlLabelStyle
      control={<Checkbox />}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      labelPlacement="start"
    />
  );
};

export default CheckboxField;

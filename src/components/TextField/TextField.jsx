import { TextFieldStyle } from './TextField.styled';

const TextField = ({
  variant = 'standard',
  id = 'text',
  label = 'text',
  type = 'text',
  value = '',
  placeholder = '',
  onChange,
  onBlur,
  error = false,
  helperText = '',
}) => {
  return (
    <TextFieldStyle
      variant={variant}
      fullWidth
      id={id}
      label={label}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
    />
  );
};

export default TextField;

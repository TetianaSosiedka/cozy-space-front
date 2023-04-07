import React from 'react';

import { TextFieldStyle } from './TextField.styled';
import { IMaskInput } from 'react-imask';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+38(#00) 000-0000"
      definitions={{
        '#': /[0-9]/,
      }}
      inputRef={ref}
      onAccept={value => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const TextField = ({
  variant = 'standard',
  id = 'text',
  label = 'text',
  type = '',
  value = '',
  name,
  placeholder = '',
  onChange,
  onBlur,
  error = false,
  helperText = '',
  select = '',
  multiline,
  rows = 1,
  children,
}) => {
  return (
    <>
      {id !== 'phone' && !select && (
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
          multiline
          rows={rows}
        />
      )}
      {select && (
        <TextFieldStyle
          variant={variant}
          fullWidth
          id={id}
          label={label}
          type={type}
          select={select}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          helperText={helperText}
          name={name}
        >
          {children}
        </TextFieldStyle>
      )}
      {id === 'phone' && (
        <TextFieldStyle
          variant={variant}
          fullWidth
          id={id}
          label={label}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          helperText={helperText}
          InputProps={{ inputComponent: TextMaskCustom }}
        />
      )}
    </>
  );
};

export default TextField;

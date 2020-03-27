import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function TextFieldInput({
  label,
  name,
  onChange,
  fullWidth,
  type,
}) {
  return (
    <TextField
      label={label}
      name={name}
      onChange={onChange}
      fullWidth={fullWidth}
      type={type}
    />
  );
}

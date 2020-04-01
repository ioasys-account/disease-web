import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const TextFieldInput = ({
  label,
  name,
  onChange,
  fullWidth,
  type,
}) => {
  const TextFieldCustom = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#DA1F26',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#f9ebea',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '1px solid rgba(0, 0, 0, 0.2)',
        },
        '&:hover fieldset': {
          borderColor: '#f9ebea',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#f9ebea',
        },
      },
    },
  })(TextField);

  return (
    <TextFieldCustom
      label={label}
      name={name}
      onChange={onChange}
      fullWidth={fullWidth}
      variant="outlined"
      type={type}
      color="#f9ebea"
    />
  );
};

TextFieldInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};

TextFieldInput.defaultProps = {
  fullWidth: false,
};
export default TextFieldInput;

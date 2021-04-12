import React, { useState} from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const TextInput = ({ label, name, initValue, onSubmit, type, required }) => {
  const [value, setValue] = useState(initValue)

  const setValueHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setValue(value);
    onSubmit({name, value});
  }

  return (
    <div>
      <TextField
        id="standard-basic"
        label={label}
        name={name}
        value={value}
        onChange={setValueHandler}
        type={type}
        required={required}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  initValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

TextInput.defaultProps  = {
  currentItem: '',
  type: 'text',
  required: false
}

export default TextInput;

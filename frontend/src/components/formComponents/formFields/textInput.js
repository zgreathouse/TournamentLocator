import React from 'react';

const TextInput = (field) => {
  const { touched, error } = field.meta;

  return (
    <div className="input-container">
      <label>{field.label}</label>
      <br/>
      <input type="text" {...field.input} />
      <div className="form-field-error">{touched && error}</div>
    </div>
  )
}

export default TextInput;

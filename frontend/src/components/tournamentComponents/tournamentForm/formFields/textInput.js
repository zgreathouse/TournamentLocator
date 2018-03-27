import React from 'react';

const TextInput = (field) => {
  const { touched, error } = field.meta;
  const className = `form-group ${touched && error ? 'has-danger' : ''}`;

  return (
    <div className={className}>
      <label>{field.label}</label>
      <br/>
      <input type="text" {...field.input}/>
      <div>
        {touched && error}
      </div>
    </div>
  )
}

export default TextInput;

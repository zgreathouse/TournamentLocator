import React from 'react';

const TextInput = (field) => {
  const { touched, error } = field.meta;

  return (
    <div className="input-container">
      <label>{field.label}</label>
      <br/>
      <input type="text" value={field.input.value} {...field.input}/>
      <div>{touched && error}</div>
    </div>
  )
}

export default TextInput;

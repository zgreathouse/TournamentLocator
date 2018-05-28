import React from 'react';

const TextareaInput = (field) => {
  const { touched, error } = field.meta;

  return (
    <div className="input-container">
      {field.label ? <label>{field.label}</label>: <div></div>}
      <br/>
      <textarea
        placeholder={field.placeholder}
        rows="10"
        cols="76"
        {...field.input}
      />
      <div className="form-field-error">{touched && error}</div>
    </div>
  )
}

export default TextareaInput;
